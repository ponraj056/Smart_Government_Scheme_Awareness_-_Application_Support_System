import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { User, Save } from 'lucide-react';

// ✅ FULL Indian District List
const indiaDistricts: Record<string, string[]> = {
  "Andhra Pradesh": [
    "Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool",
    "Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram",
    "West Godavari","YSR Kadapa"
  ],
  "Arunachal Pradesh": [
    "Anjaw","Changlang","Dibang Valley","East Kameng","East Siang",
    "Itanagar Capital Complex","Kamle","Kra Daadi","Kurung Kumey",
    "Lepa Rada","Lohit","Longding","Lower Dibang Valley",
    "Lower Siang","Lower Subansiri","Namsai","Pakke-Kessang",
    "Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Siang",
    "Upper Subansiri","West Kameng","West Siang"
  ],
  "Assam": [
    "Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang",
    "Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat",
    "Hailakandi","Hojai","Jorhat","Kamrup Metro","Kamrup Rural","Karbi Anglong",
    "Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari",
    "Sivasagar","Sonitpur","South Salmara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"
  ],
  "Bihar": [
    "Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur",
    "Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad",
    "Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani",
    "Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnea","Rohtas","Saharsa",
    "Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul",
    "Vaishali","West Champaran"
  ],
  "Chhattisgarh": [
    "Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur",
    "Dantewada","Dhamtari","Durg","Gariaband","Gaurela-Pendra-Marwahi","Janjgir-Champa",
    "Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli",
    "Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"
  ],
  "Delhi": [
    "Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi",
    "North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi",
    "West Delhi"
  ],
  "Goa": ["North Goa","South Goa"],
  "Gujarat": [
    "Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar",
    "Botad","Chhota Udaipur","Dahod","Dang","Devbhumi Dwarka","Gandhinagar","Gir Somnath",
    "Jamnagar","Junagadh","Kheda","Mahisagar","Mehsana","Morbi","Narmada","Navsari",
    "Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar",
    "Tapi","Vadodara","Valsad"
  ],
  "Haryana": [
    "Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar",
    "Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal",
    "Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu",
    "Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"
  ],
  "Jharkhand": [
    "Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa",
    "Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar",
    "Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahebganj","Saraikela-Kharsawan",
    "Simdega","West Singhbhum"
  ],
  "Karnataka": [
    "Bagalkot","Ballari","Belagavi","Bengaluru Urban","Bengaluru Rural","Bidar",
    "Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada",
    "Davanagere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi","Kodagu","Kolar",
    "Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Udupi",
    "Uttara Kannada","Vijayapura","Yadgir"
  ],
  "Kerala": [
    "Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam",
    "Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta",
    "Thiruvananthapuram","Thrissur","Wayanad"
  ],
  "Madhya Pradesh": [
    "Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul",
    "Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas",
    "Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua",
    "Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch",
    "Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol",
    "Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"
  ],
  "Maharashtra": [
    "Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana",
    "Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur",
    "Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik",
    "Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara",
    "Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"
  ],
  "Manipur": [
    "Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam",
    "Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong",
    "Tengnoupal","Thoubal","Ukhrul"
  ],
  "Meghalaya": [
    "East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills",
    "Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills",
    "West Garo Hills","West Jaintia Hills","West Khasi Hills"
  ],
  "Mizoram": [
    "Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai","Lunglei",
    "Mamit","Saiha","Saitual","Serchhip"
  ],
  "Nagaland": [
    "Chümoukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung",
    "Mon","Niuland","Noklak","Peren","Phek","Tuensang","Tseminyü","Wokha","Zunheboto"
  ],
  "Odisha": [
    "Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh",
    "Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi",
    "Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj",
    "Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundargarh"
  ],
  "Punjab": [
    "Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka",
    "Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana",
    "Malerkotla","Mansa","Moga","Muktsar","Pathankot","Patiala","Rupnagar",
    "Sangrur","SAS Nagar (Mohali)","SBS Nagar","Tarn Taran"
  ],
  "Rajasthan": [
    "Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner",
    "Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh",
    "Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli",
    "Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar",
    "Sirohi","Sri Ganganagar","Tonk","Udaipur"
  ],
  "Sikkim": [
    "Gangtok","Gyalshing","Mangan","Namchi","Pakyong","Soreng"
  ],
  "Tamil Nadu": [
    "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri",
    "Dindigul","Erode","Kallakurichi","Kancheepuram","Karur","Krishnagiri",
    "Madurai","Mayiladuthurai","Nagapattinam","Namakkal","Nilgiris","Perambalur",
    "Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi",
    "Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tirupathur",
    "Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"
  ],
  "Telangana": [
    "Adilabad","Bhadradri Kothagudem","Hanamkonda","Hyderabad","Jagtial","Jangoan",
    "Jayashankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam",
    "Komaram Bheem Asifabad","Mahabubabad","Mahabubnagar","Mancherial","Medak",
    "Medchal–Malkajgiri","Mulugu","Nagarkurnool","Nalgonda","Narayanpet","Nirmal",
    "Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet",
    "Suryapet","Vikarabad","Wanaparthy","Warangal","Yadadri Bhuvanagiri"
  ],
  "Tripura": [
    "Dhalai","Gomati","Khowai","North Tripura","Sepahijala","South Tripura",
    "Unakoti","West Tripura"
  ],
  "Uttar Pradesh": [
    "Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya",
    "Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly",
    "Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria",
    "Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar",
    "Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras",
    "Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi",
    "Kheri","Kushinagar","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura",
    "Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh",
    "Prayagraj","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur",
    "Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"
  ],
  "Uttarakhand": [
    "Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar",
    "Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal",
    "Udham Singh Nagar","Uttarkashi"
  ],
  "West Bengal": [
    "Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur",
    "Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kolkata",
    "Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman",
    "Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia",
    "South 24 Parganas","Uttar Dinajpur"
  ]
};

export const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    age: user?.age || '',
    gender: user?.gender || '',
    state: user?.state || '',
    district: user?.district || '',
    income: user?.income || '',
    occupation: user?.occupation || '',
    category: user?.category || '',
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        age: user.age?.toString() || '',
        gender: user.gender || '',
        state: user.state || '',
        district: user.district || '',
        income: user.income?.toString() || '',
        occupation: user.occupation || '',
        category: user.category || '',
      });
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateProfile({
      fullName: formData.fullName,
      age: formData.age ? parseInt(formData.age) : undefined,
      gender: formData.gender as 'Male' | 'Female' | 'Other',
      state: formData.state,
      district: formData.district,
      income: formData.income ? parseFloat(formData.income) : undefined,
      occupation: formData.occupation,
      category: formData.category as 'General' | 'SC' | 'ST' | 'OBC' |'EWS'|'others',
    });

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t('myProfile')}</h1>
              <p className="text-gray-600">Update your information for better scheme recommendations</p>
            </div>
          </div>

          {saved && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-700 font-semibold">Profile updated successfully!</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('fullName')} *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('age')}</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('gender')}</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">{t('male')}</option>
                  <option value="Female">{t('female')}</option>
                  <option value="Other">{t('other')}</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('category')}</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                  <option value="MBC">EWS</option>
                  <option value="others">others</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('state')}</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select State</option>
                  {Object.keys(indiaDistricts).map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* District Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('district')}</label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  disabled={!formData.state}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="">Select District</option>
                  {formData.state &&
                    indiaDistricts[formData.state]?.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                </select>
              </div>

              {/* Income */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('income')} (Annual in ₹)
                </label>
                <input
                  type="number"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Occupation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('occupation')}</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>

            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Providing accurate information helps us match you with relevant government schemes.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>{t('save')}</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};