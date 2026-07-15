// Database of Currencies
const currencyDatabase = [
    {
        id: "thb",
        name: "บาทไทย",
        englishName: "Thai Baht",
        code: "THB",
        country: "ประเทศไทย (Thailand)",
        continent: "asia",
        productionYear: "พ.ศ. 2445 (ค.ศ. 1902) - ปัจจุบัน",
        activeYears: "120+ ปี (ระบบทศนิยมยุคใหม่)",
        history: "เงินบาทมีประวัติศาสตร์ยาวนานตั้งแต่สมัยสุโขทัยเดิมใช้ระบบ 'พดด้วง' (เงินตราทรงขดคล้ายหอย) ต่อมาในสมัยพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 5) ได้มีการปฏิรูประบบเงินตราของไทยให้เข้าสู่มาตรฐานสากล โดยยกเลิกพดด้วงและประกาศใช้ธนบัตรใบแรกอย่างเป็นทางการในวันที่ 7 กันยายน พ.ศ. 2445 และเปลี่ยนมาแบ่งหน่วยเป็นสตางค์ตามระบบทศนิยมในเวลาต่อมา",
        trivia: "คำว่า 'บาท' เดิมเป็นหน่วยวัดน้ำหนักของเงินตราโบราณ (1 บาท เท่ากับประมาณ 15 กรัม) ก่อนที่จะกลายมาเป็นชื่อสกุลเงินอย่างเป็นทางการในปัจจุบัน",
        material: "ธนบัตร: พอลิเมอร์และกระดาษผ้าฝ้ายพิเศษ / เหรียญ: โลหะผสมทองแดง นิกเกิล และอะลูมิเนียมบรอนซ์",
        exchangeRate: 36.75, // THB per 1 USD
        image: "images/thb_currency.png",
        securityFeatures: [
            "ลายน้ำพระบรมฉายาสาทิสลักษณ์ (Watermark) เห็นเด่นชัดเมื่อยกส่องกับแสงสว่าง",
            "แถบฟอยล์ 3 มิติ (3D Holographic Foil) สีทองสะท้อนแสงเปลี่ยนสีตามมุมมอง",
            "ภาพเงาซ้อนพิเศษ (See-through Register) ตัวเลข 1000 ที่ประกบตรงกันพอดีหน้าหลัง"
        ]
    },
    {
        id: "usd",
        name: "ดอลลาร์สหรัฐ",
        englishName: "United States Dollar",
        code: "USD",
        country: "สหรัฐอเมริกา (United States of America)",
        continent: "americas",
        productionYear: "ค.ศ. 1792 - ปัจจุบัน",
        activeYears: "230+ ปี",
        history: "ได้รับการสถาปนาขึ้นโดยรัฐสภาสหรัฐอเมริกาภายใต้พระราชบัญญัติการเหรียญกษาปณ์ปี ค.ศ. 1792 โดยมีรากฐานมาจากเหรียญเงินสเปน (Spanish Silver Dollar) ซึ่งถูกใช้อย่างแพร่หลายในทวีปอเมริกาเหนือช่วงการล่าอาณานิคม ดอลลาร์สหรัฐได้พัฒนาขึ้นเป็นสกุลเงินสำรองหลักของโลกหลังข้อตกลงเบรตตันวูดส์ (Bretton Woods Agreement) ในปี ค.ศ. 1944",
        trivia: "ธนบัตรดอลลาร์สหรัฐทุกรุ่นที่ผลิตตั้งแต่ปี ค.ศ. 1861 เป็นต้นมา ยังคงสามารถใช้ชำระหนี้ได้ตามกฎหมายจนถึงปัจจุบันโดยไม่มีวันหมดอายุ",
        material: "ธนบัตร: ใยฝ้าย 75% และใยลินิน 25% (ทนทานเป็นพิเศษ) / เหรียญ: โลหะผสมนิกเกิล ทองแดง และสังกะสี",
        exchangeRate: 1.0, // Base currency
        image: "images/usd_currency.png",
        securityFeatures: [
            "แถบนิรภัย 3 มิติสีน้ำเงิน (3D Security Ribbon) ที่ทออยู่บนเนื้อธนบัตร 100 ดอลลาร์",
            "หมึกพิมพ์พิเศษเปลี่ยนสีได้ (Color-shifting Ink) ตัวเลข 100 จะเปลี่ยนจากทองเป็นเขียวเมื่อเอียงธนบัตร",
            "ตัวอักษรพิมพ์จิ๋วพิเศษ (Microprinting) ที่ขอบคอเสื้อและตามจุดต่าง ๆ"
        ]
    },
    {
        id: "eur",
        name: "ยูโร",
        englishName: "Euro",
        code: "EUR",
        country: "สหภาพยุโรป (Eurozone - 20 ประเทศ เช่น ฝรั่งเศส เยอรมนี อิตาลี)",
        continent: "europe",
        productionYear: "ค.ศ. 1999 (ระบบบัญชี) / ค.ศ. 2002 (เหรียญและธนบัตร)",
        activeYears: "24+ ปี",
        history: "เป็นหนึ่งในความสำเร็จอันยิ่งใหญ่ของการบูรณาการยุโรป เริ่มนำมาใช้เป็นสกุลเงินทางบัญชีครั้งแรกในปี ค.ศ. 1999 ก่อนจะเปิดตัวธนบัตรและเหรียญจริงในวันที่ 1 มกราคม ค.ศ. 2002 แทนที่สกุลเงินท้องถิ่นเดิม เช่น ฟรังก์ฝรั่งเศส มาร์กเยอรมัน และลีราอิตาลี เพื่อกระตุ้นเศรษฐกิจและการค้าที่เสรีในภูมิภาค",
        trivia: "ลวดลายประตู หน้าต่าง และสะพานบนธนบัตรยูโรไม่ใช่สถานที่ที่มีอยู่จริง แต่เป็นภาพวาดสไตล์สถาปัตยกรรมแบบต่าง ๆ ของยุโรป เพื่อไม่ให้ลำเอียงไปที่ประเทศใดประเทศหนึ่ง",
        material: "ธนบัตร: ใยฝ้ายบริสุทธิ์ 100% / เหรียญ: โลหะสองสี (Bi-metallic) สหโลหะทองเหลืองและนิกเกิล",
        exchangeRate: 0.93, // EUR per 1 USD
        image: "images/eur_currency.png",
        securityFeatures: [
            "แถบโฮโลแกรมแนวตั้ง (Hologram Stripe) ที่แสดงรูปพอร์ตเทรตของยูโรปาและตัวเลขมูลค่าเงิน",
            "ตัวเลขพิมพ์นูนหนา (Raised Print) บริเวณขอบธนบัตรช่วยให้ผู้พิการทางสายตาสัมผัสได้",
            "เส้นนิรภัยฝังในเนื้อกระดาษ (Security Thread) ส่องเห็นตัวเลขบอกมูลค่าและสัญลักษณ์ยูโร"
        ]
    },
    {
        id: "jpy",
        name: "เยนญี่ปุ่น",
        englishName: "Japanese Yen",
        code: "JPY",
        country: "ประเทศญี่ปุ่น (Japan)",
        continent: "asia",
        productionYear: "ค.ศ. 1871 (สมัยเมจิ) - ปัจจุบัน",
        activeYears: "150+ ปี",
        history: "สกุลเงินเยนถูกจัดตั้งขึ้นอย่างเป็นทางการโดยรัฐบาลเมจิในปี ค.ศ. 1871 ผ่านกฎหมายว่าด้วยสกุลเงินใหม่ เพื่อทดแทนระบบเงินตราดั้งเดิมของยุคเอโดะที่ซับซ้อน คำว่า 'เยน' (Yen) แปลว่า 'วงกลม' หรือ 'วัตถุทรงกลม' สื่อถึงลักษณะของเหรียญกษาปณ์แบบตะวันตกที่นำมาเริ่มใช้ในขณะนั้น",
        trivia: "เหรียญ 1 เยนของญี่ปุ่นทำจากอะลูมิเนียมบริสุทธิ์ 100% และมีน้ำหนักเป๊ะ ๆ ที่ 1 กรัม ทำให้มันสามารถลอยน้ำได้เนื่องจากแรงตึงผิวหากวางอย่างระมัดระวัง",
        material: "ธนบัตร: ผลิตจากเยื่อของต้นมิตสึมาตะ (Mitsumata) และต้นอะบากา (Abaca) ทำให้มีเนื้อเหนียวสีเหลืองนวลเป็นเอกลักษณ์ / เหรียญ: อะลูมิเนียม, ทองเหลือง, ทองแดง-นิกเกิล",
        exchangeRate: 159.80, // JPY per 1 USD
        image: "images/jpy_currency.png",
        securityFeatures: [
            "โฮโลแกรมภาพเคลื่อนไหว 3 มิติ (3D Portrait Hologram) ที่เปลี่ยนมุมมองของบุคคลสำคัญเมื่อขยับ",
            "ภาพลายน้ำเรืองแสงซ่อนอยู่ (Luminescent Ink) ที่แสดงสัญลักษณ์เมื่อส่องภายใต้แสง UV",
            "รูปแบบลายทางลายน้ำมุมมองสูง (High-definition Watermark Pattern) ป้องกันการสแกนเลียนแบบ"
        ]
    },
    {
        id: "chf",
        name: "ฟรังก์สวิส",
        englishName: "Swiss Franc",
        code: "CHF",
        country: "ประเทศสวิตเซอร์แลนด์ และลิกเตนสไตน์ (Switzerland & Liechtenstein)",
        continent: "europe",
        productionYear: "ค.ศ. 1850 - ปัจจุบัน",
        activeYears: "170+ ปี",
        history: "ก่อนปี ค.ศ. 1850 รัฐ (Cantons) ต่างๆ ในสวิตเซอร์แลนด์ออกเงินตราของตัวเองทำให้มีความวุ่นวาย รัฐธรรมนูญของสมาพันธรัฐสวิสในปี ค.ศ. 1848 จึงได้ริเริ่มให้รัฐบาลกลางเป็นผู้มีสิทธิ์ออกสกุลเงินแต่เพียงผู้เดียว และสถาปนาเงิน 'ฟรังก์สวิส' ขึ้นในปี ค.ศ. 1850 โดยอิงอัตราเทียบเท่ากับเงินฟรังก์ฝรั่งเศสในช่วงเริ่มต้น",
        trivia: "ธนบัตรสวิสซีรีส์ปัจจุบัน (ชุดที่ 9) นำเสนอภาพในแนวตั้ง (Vertical Design) แทนที่จะเป็นแนวนอนแบบเดิม และเน้นธีมที่ไม่มีรูปบุคคลสำคัญ แต่เน้นองค์ประกอบทางวิทยาศาสตร์ ธรรมชาติ และมนุษยธรรม",
        material: "ธนบัตร: Durasafe (นวัตกรรมโครงสร้าง 3 ชั้นแบบไฮบริด กระดาษ-พอลิเมอร์-กระดาษ) / เหรียญ: โลหะผสมคิวโปรนิกเกิลและบรอนซ์",
        exchangeRate: 0.89, // CHF per 1 USD
        image: "images/chf_currency.png",
        securityFeatures: [
            "กล้องจุลทรรศน์สะท้อนแสง (Microdots) จุดสะท้อนแสงขนาดเล็กมากแสดงพิกัดทางภูมิศาสตร์",
            "เอฟเฟกต์ภาพลวงตาทะลุผ่านกึ่งกลาง (Tilt Effect) เปลี่ยนแปลงตามมุมเอียงเพื่อเผยรหัสลับประเทศ",
            "หมายเลขซีเรียลสะท้อนแสงรังสีอินฟราเรด (Infrared-absorbing ink) ตรวจจับได้เฉพาะเครื่องพิเศษ"
        ]
    },
    {
        id: "roman",
        name: "เดนาริอุสโรมัน",
        englishName: "Roman Denarius",
        code: "DEN",
        country: "อาณาจักรโรมัน / จักรวรรดิโรมัน (Ancient Rome)",
        continent: "historical",
        productionYear: "ประมาณ 211 ปีก่อนคริสตกาล - ค.ศ. 244 (ศตวรรษที่ 3)",
        activeYears: "ใช้งานยาวนานกว่า 450 ปี (ปัจจุบันยกเลิกแล้ว)",
        history: "เดนาริอุสคือเหรียญเงินที่เป็นรากฐานระบบเศรษฐกิจและการค้าระดับโลกของจักรวรรดิโรมันโบราณ เริ่มผลิตครั้งแรกในช่วงสงครามพิวนิกครั้งที่สอง (Second Punic War) โดยค่าของมันลดลงเรื่อย ๆ ตามกาลเวลาเนื่องจากจักรพรรดิหลายพระองค์ทรงลดสัดส่วนของเงินแท้ลง (Debasement) เพื่อนำเงินไปใช้จ่ายในสงครามและกองทัพ จนนำไปสู่วิกฤตเงินเฟ้อรุนแรงและเลิกใช้ไปในที่สุด",
        trivia: "คำว่า 'เดนาริอุส' (Denarius) เป็นต้นกำเนิดของคำว่าเงินในหลายภาษาปัจจุบัน เช่น 'Dinar' ในตะวันออกกลาง และคำว่า 'Dinero' ในภาษาสเปน",
        material: "เหรียญ: เงินแท้ (สัดส่วนลดหลั่นจาก 95% ลงเหลือไม่ถึง 5% ในปลายยุค)",
        exchangeRate: 0.33,
        image: "images/roman_denarius.png",
        securityFeatures: [
            "ขอบของเหรียญที่ถูกตอกนูนแบบดั้งเดิม (Strike marks) เพื่อป้องกันการเจียรขอบเงินไปขาย",
            "ตราประทับของจักรพรรดิอย่างเป็นทางการ (Imperator Portrait) บนเนื้อเหรียญซึ่งลอกเลียนแบบได้ยากในยุคโบราณ",
            "คุณภาพและน้ำหนักของโลหะเงินแท้ที่ใช้ในการตรวจสอบผ่านการฟังเสียงกระทบโลหะ"
        ]
    },
    {
        id: "gbp",
        name: "ปอนด์สเตอร์ลิง",
        englishName: "British Pound Sterling",
        code: "GBP",
        country: "สหราชอาณาจักร (United Kingdom)",
        continent: "europe",
        productionYear: "พ.ศ. 2237 (ค.ศ. 1694) - ปัจจุบัน",
        activeYears: "320+ ปี",
        history: "ปอนด์สเตอร์ลิงเป็นสกุลเงินที่เก่าแก่ที่สุดในโลกที่ยังคงใช้งานอยู่จนถึงปัจจุบัน ต้นกำเนิดย้อนกลับไปในยุคแองโกล-แซกซอน ธนาคารแห่งอังกฤษ (Bank of England) เริ่มออกธนบัตรครั้งแรกในปี ค.ศ. 1694 สัญลักษณ์ £ มาจากตัวอักษร L ในภาษาละติน 'Libra' หมายถึงน้ำหนักปอนด์",
        trivia: "ธนบัตรปอนด์สเตอร์ลิงรุ่นปัจจุบันที่ทำจากพอลิเมอร์มีรูปสมเด็จพระเจ้าชาร์ลส์ที่ 3 เป็นพระมหากษัตริย์พระองค์ที่สองต่อจากสมเด็จพระราชินีนาถเอลิซาเบธที่ 2 ที่ได้ประทับบนธนบัตรของธนาคารแห่งอังกฤษ",
        material: "ธนบัตร: พอลิเมอร์ (โพลีโพรพีลีน) / เหรียญ: คิวโปรนิกเกิล, นิกเกิล-ทองเหลือง, เหล็กชุบทองแดง",
        exchangeRate: 0.77,
        image: "images/gbp_currency.png",
        securityFeatures: [
            "หน้าต่างโปร่งใสสองบาน (Double transparent windows) ป้องกันการปลอมแปลงแบบดิจิทัล",
            "ภาพโฮโลแกรมเปลี่ยนสีได้ (Hologram details) เปลี่ยนระหว่างรูปมงกุฎและตัวเลขมูลค่าเงินเมื่อเอียงธนบัตร",
            "การพิมพ์นูนแบบสัมผัสได้ (Tactile feature) มีจุดปุ่มนูนสำหรับผู้พิการทางสายตา"
        ]
    },
    {
        id: "aud",
        name: "ดอลลาร์ออสเตรเลีย",
        englishName: "Australian Dollar",
        code: "AUD",
        country: "ประเทศออสเตรเลีย (Australia)",
        continent: "oceania",
        productionYear: "ค.ศ. 1966 - ปัจจุบัน",
        activeYears: "60+ ปี",
        history: "ดอลลาร์ออสเตรเลียถูกนำมาใช้ในปี ค.ศ. 1966 แทนที่ปอนด์ออสเตรเลียเดิมตามการเปลี่ยนผ่านเข้าสู่ระบบทศนิยม ออสเตรเลียเป็นประเทศแรกในโลกที่พัฒนาและริเริ่มใช้ธนบัตรพอลิเมอร์ (พลาสติก) ในปี ค.ศ. 1988 เพื่อเพิ่มความทนทานและเพิ่มความยากในการปลอมแปลง",
        trivia: "ธนบัตรดอลลาร์ออสเตรเลียทำจากพอลิเมอร์เกรดสูง ทำให้ทนทานต่อการซักเครื่องซักผ้า และไม่ฉีกขาดง่ายเมื่อเทียบกับธนบัตรกระดาษทั่วไป",
        material: "ธนบัตร: พอลิเมอร์ (Biaxially Oriented Polypropylene) / เหรียญ: คิวโปรนิกเกิล, อะลูมิเนียมบรอนซ์",
        exchangeRate: 1.48,
        image: "images/aud_currency.png",
        securityFeatures: [
            "แถบใสจากบนลงล่าง (Top-to-bottom clear window) พร้อมภาพโฮโลแกรม 3 มิติเคลื่อนไหวภายในหน้าต่าง",
            "นกบินขยับปีก (Flying bird feature) ภาพนกในแถบโฮโลแกรมจะขยับปีกเมื่อเอียงธนบัตร",
            "ตัวเลขเรืองแสงภายใต้แสง UV (Fluorescent serial number) ปรากฏเด่นชัดเมื่อส่องไฟแบล็กไลต์"
        ]
    },
    {
        id: "cad",
        name: "ดอลลาร์แคนาดา",
        englishName: "Canadian Dollar",
        code: "CAD",
        country: "ประเทศแคนาดา (Canada)",
        continent: "americas",
        productionYear: "ค.ศ. 1858 - ปัจจุบัน",
        activeYears: "160+ ปี",
        history: "เดิมทีแต่ละมณฑลในแคนาดาออกเงินของตนเอง ต่อมาในรัฐบัญญัติปี ค.ศ. 1858 แคนาดาได้ประกาศใช้เงินดอลลาร์เป็นสกุลเงินทางการอิงกับระบบทศนิยมและค่าของดอลลาร์สหรัฐ แคนาดาได้เปลี่ยนมาใช้ธนบัตรพอลิเมอร์ซีรีส์ 'Frontier' ตั้งแต่ปี ค.ศ. 2011",
        trivia: "คนมักเรียกเหรียญ 1 ดอลลาร์แคนาดาว่า 'Loonie' เนื่องจากมีรูปนกโลน (Loon) ซึ่งเป็นนกน้ำประจำชาติอยู่ด้านหลัง และเหรียญ 2 ดอลลาร์ว่า 'Toonie'",
        material: "ธนบัตร: พอลิเมอร์สังเคราะห์ / เหรียญ: เหล็กชุบนิกเกิล, เหล็กชุบทองเหลือง",
        exchangeRate: 1.36,
        image: "images/cad_currency.png",
        securityFeatures: [
            "หน้าต่างโปร่งแสงขนาดใหญ่ (Large transparent window) ซึ่งบรรจุภาพเหมือนโฮโลแกรมสีเมทัลลิกของอาคารรัฐสภาและบุคคลสำคัญ",
            "หมึกพิมพ์นูนหนา (Raised ink) บริเวณคำว่า 'Bank of Canada' และตัวเลขบอกราคา",
            "ตัวเลขซ่อนเร้น (Hidden numbers) ภายในรูปใบเมเปิ้ลโปร่งใสเล็ก ๆ มองเห็นเมื่อส่องกับไฟดวงเล็ก"
        ]
    },
    {
        id: "cny",
        name: "หยวนจีน (เหรินหมินปี้)",
        englishName: "Chinese Yuan Renminbi",
        code: "CNY",
        country: "ประเทศจีน (China)",
        continent: "asia",
        productionYear: "ค.ศ. 1948 - ปัจจุบัน",
        activeYears: "75+ ปี",
        history: "ธนาคารประชาชนจีนประกาศออกเงิน 'เหรินหมินปี้' (แปลว่า เงินตราของประชาชน) ครั้งแรกในเดือนธันวาคม ค.ศ. 1948 ก่อนการสถาปนาสาธารณรัฐประชาชนจีนเพียงเล็กน้อย สกุลเงินหยวนมีการปรับปรุงการออกแบบและระบบความปลอดภัยมาแล้วถึง 5 ซีรีส์หลัก",
        trivia: "แม้จะเรียกสกุลเงินอย่างเป็นทางการว่า เหรินหมินปี้ (RMB) แต่หน่วยนับพื้นฐานจะเรียกว่า 'หยวน' (Yuan) และในภาษาพูดประจำวันมักเรียกเงินนี้ว่า 'ไคว่' (Kuai)",
        material: "ธนบัตร: กระดาษผ้าฝ้ายคุณภาพสูงพิเศษ / เหรียญ: เหล็กชุบนิกเกิล, เหล็กชุบทองเหลือง, อะลูมิเนียมผสม",
        exchangeRate: 7.25,
        image: "images/cny_currency.png",
        securityFeatures: [
            "ลายน้ำรูปเหมา เจ๋อตง (Mao Zedong Watermark) และลายน้ำสามมิติรูปดอกบัวเมื่อส่องไฟ",
            "หมายเลขมูลค่าเปลี่ยนสีได้ (Color-shifting value number) หมายเลข 100 จะสลับระหว่างสีทองและเขียว",
            "เส้นใยความปลอดภัยประกายสีแดงและน้ำเงิน (Security fibers) ฝังในเนื้อกระดาษเรืองแสงภายใต้ไฟ UV"
        ]
    },
    {
        id: "sgd",
        name: "ดอลลาร์สิงคโปร์",
        englishName: "Singapore Dollar",
        code: "SGD",
        country: "ประเทศสิงคโปร์ (Singapore)",
        continent: "asia",
        productionYear: "ค.ศ. 1967 - ปัจจุบัน",
        activeYears: "55+ ปี",
        history: "หลังจากสิงคโปร์แยกตัวออกจากสหพันธรัฐมาเลเซียในปี ค.ศ. 1965 สิงคโปร์ได้จัดตั้งคณะกรรมาธิการเงินตราและออกสกุลเงินของตัวเองในวันที่ 7 มิถุนายน ค.ศ. 1967 เดิมทีสามารถใช้แลกเปลี่ยนและชำระหนี้ร่วมกับเงินดอลลาร์บรูไนได้ตามข้อตกลงแลกเปลี่ยนเงินตรา",
        trivia: "ธนบัตรชุด 'Portrait Series' ที่ใช้ในปัจจุบันแสดงรูปภาพของ ยูซอฟ บิน อิสฮัก (Yusof bin Ishak) ประธานาธิบดีคนแรกของสิงคโปร์ ด้านหลังแสดงธีมความก้าวหน้าและการศึกษาของประเทศ",
        material: "ธนบัตร: พอลิเมอร์ (ตั้งแต่ปี ค.ศ. 2004) และบางรุ่นเป็นกระดาษ / เหรียญ: เหล็กชุบหลายชั้น (นิกเกิล, ทองเหลือง, ทองแดง)",
        exchangeRate: 1.34,
        image: "images/sgd_currency.png",
        securityFeatures: [
            "หน้าต่างใสทรงไข่ (Clear oval window) แสดงรูปเหมือนของยูซอฟ บิน อิสฮัก และมีเอฟเฟกต์สีรุ้งสะท้อน",
            "ตราสัญลักษณ์ประจำชาติโฮโลแกรม (Holographic state crest) มีความแวววาวและเปลี่ยนสีตามทิศทางแสง",
            "อักษรจิ๋วมาก (Micro-text) คำว่า 'MAS' และมูลค่าธนบัตรพิมพ์ซ่อนอยู่บริเวณรอบข้างของรูปหน้าหลัก"
        ]
    },
    {
        id: "inr",
        name: "รูปีอินเดีย",
        englishName: "Indian Rupee",
        code: "INR",
        country: "ประเทศอินเดีย (India)",
        continent: "asia",
        productionYear: "ค.ศ. 1540 (ยุคเชอร์ ชาห์ ซูรี) / ระบบยุคใหม่ ค.ศ. 1947",
        activeYears: "480+ ปี (ประวัติศาสตร์รวม)",
        history: "คำว่ารูปีมาจากภาษาภาษิต 'รุปยะ' แปลว่าเงินบริสุทธิ์หรือเหรียญเงิน เริ่มผลิตและใช้งานโดยผู้ปกครองเชอร์ ชาห์ ซูรี ในศตวรรษที่ 16 ต่อมารัฐบาลอินเดียยุคหลังได้รับเอกราชได้สถาปนารูปีเป็นเงินตราหลัก และมีการยกเลิกธนบัตรใบเก่า (Demonetization) ในปี ค.ศ. 2016 เพื่อปราบปรามคอร์รัปชัน",
        trivia: "สัญลักษณ์รูปีอินเดีย ₹ ได้รับการออกแบบใหม่ในปี ค.ศ. 2010 โดยผสมผสานระหว่างตัวอักษรเทวนาครี 'र' (Ra) และตัวอักษรโรมัน 'R' เข้าด้วยกัน",
        material: "ธนบัตร: กระดาษผ้าฝ้ายและใยลินินทนทานสูง / เหรียญ: สเตนเลสสตีลเฟอร์ริติก, สหโลหะทองเหลือง",
        exchangeRate: 83.50,
        image: "images/inr_currency.png",
        securityFeatures: [
            "แถบความปลอดภัยหน้าต่างคู่ (Windowed security thread) สลับสีเขียวเป็นน้ำเงินเมื่อเอียงและพิมพ์ตัวอักษร 'भारत' (Bharat)",
            "รูปเหมือนมหาตมา คานธี ลายน้ำเงา (Mahatma Gandhi Watermark) แสดงควบคู่กับลายน้ำแนวตั้งบอกมูลค่าเงิน",
            "สัญลักษณ์ระบุจุดนูนสำหรับผู้พิการทางสายตา (Raised identification mark) รูปทรงเรขาคณิตเฉพาะในแต่ละรุ่นธนบัตร"
        ]
    },
    {
        id: "zar",
        name: "แรนด์แอฟริกาใต้",
        englishName: "South African Rand",
        code: "ZAR",
        country: "ประเทศแอฟริกาใต้ (South Africa)",
        continent: "africa",
        productionYear: "ค.ศ. 1961 - ปัจจุบัน",
        activeYears: "65+ ปี",
        history: "แรนด์แอฟริกาใต้เปิดตัวในปี ค.ศ. 1961 พร้อมกับการจัดตั้งสาธารณรัฐแอฟริกาใต้แทนที่ปอนด์แอฟริกาใต้ในระบบทศนิยม คำว่า 'Rand' มาจากแนวเขา 'Witwatersrand' (วิทวอเตอร์สแรนด์) ซึ่งเป็นแหล่งขุดทองที่ใหญ่ที่สุดแห่งหนึ่งของโลกในเขตโยฮันเนสเบิร์ก",
        trivia: "ธนบัตรแอฟริกาใต้รุ่นปัจจุบันได้รับการยกย่องว่าสวยงามที่สุดชุดหนึ่งเนื่องจากพิมพ์ภาพสัตว์ป่าผู้ยิ่งใหญ่ทั้งห้า (Big Five) ได้แก่ สิงโต, เสือดาว, แรด, ช้าง และควายป่า ควบคู่ไปกับรูปเนลสัน แมนเดลา",
        material: "ธนบัตร: กระดาษใยฝ้ายคุณภาพสูง / เหรียญ: เหล็กชุบทองแดง, เหล็กชุบนิกเกิล, สองสีนิกเกิล-ทองเหลือง",
        exchangeRate: 18.20,
        image: "images/zar_currency.png",
        securityFeatures: [
            "แถบโฮโลแกรมประกายไฟ (Hologram security band) แสดงสัญลักษณ์สัตว์ป่าหมุนเวียนและตัวเลขราคาเมื่อปรับมุมมอง",
            "ลายน้ำใบหน้าเนลสัน แมนเดลา (Nelson Mandela Watermark) เห็นเด่นชัดและโปร่งแสงเป็นธรรมชาติ",
            "หมึกสีกำมะหยี่เปลี่ยนสีได้ (Color-shifting ink) รูปสัตว์ป่าด้านขวาของธนบัตรจะเปลี่ยนเฉดสีเมื่อเอียง"
        ]
    },
    {
        id: "brl",
        name: "เรียลบราซิล",
        englishName: "Brazilian Real",
        code: "BRL",
        country: "ประเทศบราซิล (Brazil)",
        continent: "americas",
        productionYear: "ค.ศ. 1994 - ปัจจุบัน",
        activeYears: "30+ ปี (ระบบยุคใหม่)",
        history: "เรียลบราซิลถือกำเนิดขึ้นภายใต้แผนเศรษฐกิจ 'Plano Real' ในปี ค.ศ. 1994 เพื่อควบคุมภาวะเงินเฟ้อขั้นรุนแรง (Hyperinflation) ที่ยืดเยื้อมานานหลายทศวรรษในบราซิล ถือเป็นหนึ่งในมาตรการทางการเงินที่ประสบความสำเร็จมากที่สุดในการสร้างเสถียรภาพทางเศรษฐกิจในละตินอเมริกา",
        trivia: "ธนบัตรบราซิลรุ่นปัจจุบันมีชื่อเรียกว่าซีรีส์ที่สอง (Second Series) ออกแบบให้มีความยาวของธนบัตรที่แตกต่างกันตามมูลค่า (ยิ่งมูลค่าสูงธนบัตรยิ่งยาว) เพื่อป้องกันการนำธนบัตรราคาต่ำมาฟอกสีเพื่อพิมพ์ใหม่ในราคาสูง",
        material: "ธนบัตร: กระดาษผ้าฝ้ายผสมใยเซลลูโลสหนา / เหรียญ: เหล็กชุบทองแดง, สเตนเลสสตีล, ทองสัมฤทธิ์",
        exchangeRate: 5.40,
        image: "images/brl_currency.png",
        securityFeatures: [
            "ลายน้ำรูปปั้นเทพีแห่งเสรีภาพสาธารณรัฐ (Effigy of Republic Watermark) ปรากฏเด่นชัดเมื่อส่องแสงไฟ",
            "ตัวเลขหลากสีปริซึมซ่อนเร้น (Hidden puzzle number) ตัวเลขมูลค่าที่แบ่งครึ่งพิมพ์สองด้านจะประกบตรงกันพอดีเป็นภาพเดียวเมื่อส่องไฟ",
            "แถบพิมพ์ฟอยล์แนวตั้งลวดลายสามมิติ (3D Holographic Foil stripe) สีเงินวาวแสดงรูปสัตว์ป่าของบราซิล"
        ]
    }
];

// App State
let wallet = JSON.parse(localStorage.getItem("virtual_wallet")) || [];
let activeFilter = "all";
let searchQuery = "";
let currentQuizQuestion = null;
let score = 0;

// API Caching configuration
const CACHE_KEY = "currency_rates_cache";
const CACHE_DURATION = 3600000; // 1 ชั่วโมงในหน่วยมิลลิวินาที

// Fetch real-time exchange rates
async function fetchRealTimeRates(forceRefresh = false) {
    const statusEl = document.getElementById("api-status");
    const refreshBtn = document.getElementById("refresh-rates-btn");
    
    if (statusEl) {
        statusEl.className = "api-status";
        statusEl.innerHTML = `<i class="fas fa-sync fa-spin"></i> กำลังอัปเดตอัตราแลกเปลี่ยน...`;
    }
    if (refreshBtn) {
        refreshBtn.disabled = true;
        const icon = refreshBtn.querySelector("i");
        if (icon) icon.className = "fas fa-sync fa-spin";
    }

    try {
        // 1. ตรวจสอบแคชก่อน เว้นแต่จะเป็นการกด Refresh บังคับ
        if (!forceRefresh) {
            const cachedData = localStorage.getItem(CACHE_KEY);
            if (cachedData) {
                const parsed = JSON.parse(cachedData);
                const now = Date.now();
                if (now - parsed.timestamp < CACHE_DURATION) {
                    applyRatesToDatabase(parsed.rates);
                    updateAPIStatusUI(true, parsed.timestamp);
                    if (refreshBtn) {
                        const icon = refreshBtn.querySelector("i");
                        if (icon) icon.className = "fas fa-sync-alt";
                        refreshBtn.disabled = false;
                    }
                    return;
                }
            }
        }

        // 2. ดึงข้อมูลจาก API จริง
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.result === "success" && data.rates) {
            const cachePayload = {
                timestamp: Date.now(),
                rates: data.rates
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload));
            
            applyRatesToDatabase(data.rates);
            updateAPIStatusUI(true, cachePayload.timestamp);
            showToast("อัปเดตอัตราแลกเปลี่ยนเรียลไทม์สำเร็จ!");
        } else {
            throw new Error("โครงสร้างข้อมูล API ไม่ถูกต้อง");
        }
    } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
        // Fallback: ใช้แคชเก่าที่หมดอายุไปแล้ว
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
            const parsed = JSON.parse(cachedData);
            applyRatesToDatabase(parsed.rates);
            updateAPIStatusUI(true, parsed.timestamp, true); // true คือระบุว่าใช้แคชแทนอัปเดตล้มเหลว
            showToast("เชื่อมต่อ API ล้มเหลว: กำลังใช้อัตราแลกเปลี่ยนล่าสุดจากแคช");
        } else {
            updateAPIStatusUI(false);
            showToast("เชื่อมต่อ API ล้มเหลว: กำลังใช้อัตราแลกเปลี่ยนสำรองจากฐานข้อมูล");
        }
    } finally {
        if (refreshBtn) {
            refreshBtn.disabled = false;
            const icon = refreshBtn.querySelector("i");
            if (icon) icon.className = "fas fa-sync-alt";
        }
    }
}

function applyRatesToDatabase(rates) {
    currencyDatabase.forEach(c => {
        // ข้ามสกุลเงินประวัติศาสตร์ และข้ามการแปลง USD เป็นตัวมันเอง (ซึ่งเท่ากับ 1.0 เสมอ)
        if (c.id === "roman" || c.code === "USD") {
            return;
        }
        if (rates[c.code]) {
            c.exchangeRate = rates[c.code];
        }
    });
}

function updateAPIStatusUI(isSuccess, timestamp = null, isFallback = false) {
    const statusEl = document.getElementById("api-status");
    if (!statusEl) return;
    
    if (isSuccess && timestamp) {
        const date = new Date(timestamp);
        const timeString = date.toLocaleTimeString("th-TH", { hour: "2-digit", minute: "2-digit" });
        if (isFallback) {
            statusEl.className = "api-status success";
            statusEl.innerHTML = `<i class="fas fa-history"></i> ล่าสุดในระบบแคชเมื่อ ${timeString} น. (ออฟไลน์)`;
        } else {
            statusEl.className = "api-status success";
            statusEl.innerHTML = `<i class="fas fa-check-circle"></i> เรียลไทม์ (อัปเดตเมื่อ ${timeString} น.)`;
        }
    } else {
        statusEl.className = "api-status error";
        statusEl.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ออฟไลน์ (กำลังใช้อัตราแลกเปลี่ยนสำรอง)`;
    }
}

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

async function initApp() {
    setupEventListeners();
    updateWalletSidebar();
    
    // โหลดข้อมูลอัตราแลกเปลี่ยนเรียลไทม์ก่อนการแสดงผล
    await fetchRealTimeRates();
    
    renderCurrencies();
    setupConverter();
    loadRandomQuiz();
}

// Render Currencies Grid
function renderCurrencies() {
    const grid = document.getElementById("currencies-grid");
    if (!grid) return;
    
    grid.innerHTML = "";
    
    const filtered = currencyDatabase.filter(c => {
        const matchesTab = activeFilter === "all" || c.continent === activeFilter;
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              c.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              c.country.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>ไม่พบสกุลเงินที่ค้นหา กรุณาลองใช้คำอื่น</p>
            </div>
        `;
        return;
    }

    filtered.forEach(curr => {
        const isInWallet = wallet.includes(curr.id);
        
        const card = document.createElement("div");
        card.className = "currency-card card-glow";
        card.setAttribute("data-id", curr.id);
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-image-container" onclick="openLightbox('${curr.image}', '${curr.name}')">
                    <img src="${curr.image}" alt="${curr.name}" class="currency-image">
                    <div class="image-overlay">
                        <span><i class="fas fa-search-plus"></i> คลิกขยายภาพ</span>
                    </div>
                </div>
                <div class="card-header">
                    <div class="title-area">
                        <span class="currency-code-badge">${curr.code}</span>
                        <h3>${curr.name}</h3>
                        <p class="eng-sub">${curr.englishName}</p>
                    </div>
                    <button class="wallet-btn ${isInWallet ? 'active' : ''}" onclick="toggleWallet('${curr.id}', event)">
                        <i class="${isInWallet ? 'fas' : 'far'} fa-bookmark"></i>
                    </button>
                </div>
                <div class="card-body">
                    <div class="info-row">
                        <span class="info-label"><i class="fas fa-globe-asia"></i> ดินแดนที่ใช้:</span>
                        <span class="info-val">${curr.country}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label"><i class="fas fa-calendar-check"></i> ยุคผลิต/เริ่มใช้:</span>
                        <span class="info-val">${curr.productionYear}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label"><i class="fas fa-hourglass-half"></i> ระยะเวลาใช้งาน:</span>
                        <span class="info-val">${curr.activeYears}</span>
                    </div>
                    <p class="history-preview truncate-text">${curr.history}</p>
                </div>
                <div class="card-footer">
                    <button class="detail-btn btn-primary" onclick="showDetailModal('${curr.id}')">
                        <i class="fas fa-info-circle"></i> อ่านประวัติ & ระบบความปลอดภัย
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Search Box
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            renderCurrencies();
        });
    }

    // Tabs
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            activeFilter = tab.getAttribute("data-tab");
            renderCurrencies();
        });
    });

    // Close Modals
    const closeBtns = document.querySelectorAll(".close-modal");
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            closeAllModals();
        });
    });

    // Lightbox zoom buttons
    const zoomInBtn = document.getElementById("zoom-in-btn");
    const zoomOutBtn = document.getElementById("zoom-out-btn");
    const zoomResetBtn = document.getElementById("zoom-reset-btn");
    const lightboxImg = document.getElementById("lightbox-img");

    let currentScale = 1;

    if (zoomInBtn && lightboxImg) {
        zoomInBtn.addEventListener("click", () => {
            currentScale = Math.min(currentScale + 0.25, 3);
            lightboxImg.style.transform = `scale(${currentScale})`;
        });
    }

    if (zoomOutBtn && lightboxImg) {
        zoomOutBtn.addEventListener("click", () => {
            currentScale = Math.max(currentScale - 0.25, 0.5);
            lightboxImg.style.transform = `scale(${currentScale})`;
        });
    }

    if (zoomResetBtn && lightboxImg) {
        zoomResetBtn.addEventListener("click", () => {
            currentScale = 1;
            lightboxImg.style.transform = `scale(${currentScale})`;
        });
    }

    // Toggle Sidebar Wallet
    const sidebarToggle = document.getElementById("toggle-wallet-sidebar");
    const sidebarClose = document.getElementById("close-wallet-sidebar");
    const walletSidebar = document.getElementById("wallet-sidebar");

    if (sidebarToggle && walletSidebar) {
        sidebarToggle.addEventListener("click", () => {
            walletSidebar.classList.add("open");
        });
    }

    if (sidebarClose && walletSidebar) {
        sidebarClose.addEventListener("click", () => {
            walletSidebar.classList.remove("open");
        });
    }

    // Random explore button
    const randomBtn = document.getElementById("random-explore-btn");
    if (randomBtn) {
        randomBtn.addEventListener("click", () => {
            const randomIndex = Math.floor(Math.random() * currencyDatabase.length);
            const randomCurr = currencyDatabase[randomIndex];
            showDetailModal(randomCurr.id);
        });
    }

    // Refresh API Rates button
    const refreshBtn = document.getElementById("refresh-rates-btn");
    if (refreshBtn) {
        refreshBtn.addEventListener("click", async () => {
            await fetchRealTimeRates(true);
            renderCurrencies();
            setupConverter();
            const fromSelect = document.getElementById("convert-from");
            if (fromSelect) {
                fromSelect.dispatchEvent(new Event("change"));
            }
        });
    }
}

// Show currency detail modal
function showDetailModal(id) {
    const curr = currencyDatabase.find(c => c.id === id);
    if (!curr) return;

    const modal = document.getElementById("detail-modal");
    const content = document.getElementById("detail-modal-body");
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="detail-container">
            <div class="detail-image-box" onclick="openLightbox('${curr.image}', '${curr.name}')">
                <img src="${curr.image}" alt="${curr.name}" class="detail-main-img">
                <p class="img-caption"><i class="fas fa-search-plus"></i> กดที่ภาพเพื่อเปิดระบบซูมความละเอียดสูง</p>
            </div>
            <div class="detail-info-box">
                <div class="detail-headline">
                    <span class="detail-code">${curr.code}</span>
                    <h2>${curr.name} (${curr.englishName})</h2>
                </div>
                <div class="badge-row">
                    <span class="detail-badge"><i class="fas fa-globe"></i> ${curr.country}</span>
                    <span class="detail-badge"><i class="fas fa-calendar"></i> ผลิตปี: ${curr.productionYear}</span>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-history"></i> ประวัติความเป็นมา</h3>
                    <p class="detail-desc">${curr.history}</p>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-shield-alt"></i> ระบบเทคโนโลยีป้องกันการปลอมแปลง</h3>
                    <ul class="security-list">
                        ${curr.securityFeatures.map(feat => `<li><i class="fas fa-check-circle text-gold"></i> ${feat}</li>`).join("")}
                    </ul>
                </div>
                
                <div class="detail-section flex-row-info">
                    <div>
                        <strong><i class="fas fa-atom"></i> วัสดุผลิต:</strong>
                        <span>${curr.material}</span>
                    </div>
                    <div>
                        <strong><i class="fas fa-coins"></i> อัตราแลกเปลี่ยน:</strong>
                        <span>1 USD = ${curr.exchangeRate.toLocaleString("th-TH", { maximumFractionDigits: 4 })} ${curr.code} ${curr.id === 'roman' ? '(อัตราจำลองประวัติศาสตร์)' : (curr.code === 'USD' ? '(สกุลเงินอ้างอิง)' : '(อัปเดตเรียลไทม์)')}</span>
                    </div>
                    <div>
                        <strong><i class="fas fa-lightbulb"></i> เกร็ดความรู้ (Trivia):</strong>
                        <span>${curr.trivia}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add("open");
}

// Lightbox modal functions
function openLightbox(imgSrc, title) {
    const lightbox = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    
    if (!lightbox || !lightboxImg) return;
    
    lightboxImg.src = imgSrc;
    lightboxImg.style.transform = "scale(1)";
    if (lightboxTitle) lightboxTitle.innerText = title;
    
    lightbox.classList.add("open");
}

function closeAllModals() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.classList.remove("open");
    });
}

// Toggle Virtual Wallet
function toggleWallet(id, event) {
    if (event) {
        event.stopPropagation();
    }
    
    const index = wallet.indexOf(id);
    if (index > -1) {
        wallet.splice(index, 1);
    } else {
        wallet.push(id);
    }
    
    localStorage.setItem("virtual_wallet", JSON.stringify(wallet));
    renderCurrencies();
    updateWalletSidebar();
    showToast(index > -1 ? "ลบออกจากสมุดบันทึกเรียบร้อย" : "บันทึกในกระเป๋าจำลองเรียบร้อยแล้ว!");
}

// Update Wallet Sidebar Content
function updateWalletSidebar() {
    const container = document.getElementById("wallet-items-container");
    const counter = document.getElementById("wallet-counter");
    if (!container) return;

    if (counter) counter.innerText = wallet.length;
    container.innerHTML = "";

    if (wallet.length === 0) {
        container.innerHTML = `
            <div class="empty-wallet-info">
                <i class="fas fa-wallet"></i>
                <p>กระเป๋าเงินจำลองของคุณว่างเปล่า</p>
                <p class="sub">คลิกสัญลักษณ์ Bookmark บนสกุลเงินที่ประทับใจเพื่อบันทึกไว้ในหน้าสะสม</p>
            </div>
        `;
        return;
    }

    wallet.forEach(id => {
        const curr = currencyDatabase.find(c => c.id === id);
        if (!curr) return;

        const div = document.createElement("div");
        div.className = "wallet-sidebar-item";
        div.innerHTML = `
            <img src="${curr.image}" alt="${curr.name}">
            <div class="item-meta">
                <h4>${curr.name}</h4>
                <span>${curr.code} | ${curr.country}</span>
            </div>
            <button class="remove-item-btn" onclick="toggleWallet('${curr.id}')">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        container.appendChild(div);
    });
}

// Populate Converter Dropdowns
function populateConverterSelects() {
    const fromSelect = document.getElementById("convert-from");
    const toSelect = document.getElementById("convert-to");
    if (!fromSelect || !toSelect) return;

    // Save previous selections
    const prevFromValue = fromSelect.value;
    const prevToValue = toSelect.value;

    // Clear selects
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    // Add USD option first since rates are relative to USD
    const optUSDFrom = document.createElement("option");
    optUSDFrom.value = "USD";
    optUSDFrom.innerText = "ดอลลาร์สหรัฐ (USD)";
    fromSelect.appendChild(optUSDFrom);

    const optUSDTo = document.createElement("option");
    optUSDTo.value = "USD";
    optUSDTo.innerText = "ดอลลาร์สหรัฐ (USD)";
    toSelect.appendChild(optUSDTo);

    // Populate from database
    currencyDatabase.forEach(c => {
        // Skip USD if it was already added to prevent duplicates
        if (c.code === "USD") return;
        
        const optFrom = document.createElement("option");
        optFrom.value = c.code;
        optFrom.innerText = `${c.name} (${c.code})`;
        fromSelect.appendChild(optFrom);

        const optTo = document.createElement("option");
        optTo.value = c.code;
        optTo.innerText = `${c.name} (${c.code})`;
        toSelect.appendChild(optTo);
    });

    // Restore selections
    if (prevFromValue) fromSelect.value = prevFromValue;
    if (prevToValue) toSelect.value = prevToValue;
}

let converterInitialized = false;

// Setup Converter Calculator
function setupConverter() {
    const fromSelect = document.getElementById("convert-from");
    const toSelect = document.getElementById("convert-to");
    const amountInput = document.getElementById("convert-amount");
    const resultDiv = document.getElementById("convert-result-val");

    if (!fromSelect || !toSelect || !amountInput || !resultDiv) return;

    // Populate selects
    populateConverterSelects();

    // Prevent duplicate event listeners
    if (converterInitialized) {
        return;
    }

    // Set default value for To select on first run
    toSelect.value = "THB";

    // Convert Event Listeners
    const triggerConvert = () => {
        const amount = parseFloat(amountInput.value) || 0;
        const fromCode = fromSelect.value;
        const toCode = toSelect.value;

        if (amount <= 0) {
            resultDiv.innerText = "0.00";
            return;
        }

        // Rates to USD conversion rate
        const getRate = (code) => {
            if (code === "USD") return 1.0;
            const c = currencyDatabase.find(curr => curr.code === code);
            return c ? c.exchangeRate : 1.0;
        };

        const rateFrom = getRate(fromCode);
        const rateTo = getRate(toCode);

        // Convert process: Amount in fromCode -> convert to USD -> convert to toCode
        const amountInUSD = amount / rateFrom;
        const convertedAmount = amountInUSD * rateTo;

        resultDiv.innerHTML = `
            <div class="result-number">${convertedAmount.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div class="result-label">${toCode}</div>
        `;
    };

    amountInput.addEventListener("input", triggerConvert);
    fromSelect.addEventListener("change", triggerConvert);
    toSelect.addEventListener("change", triggerConvert);
    
    // Run initial conversion
    triggerConvert();
    
    converterInitialized = true;
}

// Mini Game - Quiz Engine
function loadRandomQuiz() {
    const quizQuestionEl = document.getElementById("quiz-question");
    const quizOptionsEl = document.getElementById("quiz-options");
    const quizFeedbackEl = document.getElementById("quiz-feedback");
    
    if (!quizQuestionEl || !quizOptionsEl || !quizFeedbackEl) return;

    quizFeedbackEl.className = "quiz-feedback-box";
    quizFeedbackEl.innerText = "";

    // Generate Question Type randomly
    const questionTypes = ["country", "code", "trivia", "material"];
    const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    
    const correctIndex = Math.floor(Math.random() * currencyDatabase.length);
    const correctCurr = currencyDatabase[correctIndex];

    // Pick 3 wrong options
    let pool = currencyDatabase.filter(c => c.id !== correctCurr.id);
    let options = [correctCurr];
    
    while (options.length < 4 && pool.length > 0) {
        const randIdx = Math.floor(Math.random() * pool.length);
        options.push(pool.splice(randIdx, 1)[0]);
    }

    // Shuffle options
    options.sort(() => Math.random() - 0.5);

    let questionText = "";
    let getOptionLabel = (c) => c.name;

    switch (randomType) {
        case "country":
            questionText = `สกุลเงินใดที่ใช้ใน "${correctCurr.country.split(" (")[0]}" ?`;
            getOptionLabel = (c) => `${c.name} (${c.code})`;
            break;
        case "code":
            questionText = `รหัสสกุลเงิน (ISO Code) ของ "${correctCurr.name}" คือรหัสใด?`;
            getOptionLabel = (c) => c.code;
            break;
        case "trivia":
            questionText = `เกร็ดความรู้: "${correctCurr.trivia}" คือจุดเด่นหรือความจริงของสกุลเงินใด?`;
            getOptionLabel = (c) => c.name;
            break;
        case "material":
            questionText = `ธนบัตรหรือเหรียญที่ใช้วัสดุในการผลิตดังนี้: "${correctCurr.material.split(" / ")[0]}" คือสกุลเงินอะไร?`;
            getOptionLabel = (c) => c.name;
            break;
    }

    currentQuizQuestion = {
        correctId: correctCurr.id,
        question: questionText
    };

    quizQuestionEl.innerText = questionText;
    quizOptionsEl.innerHTML = "";

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn btn-secondary";
        btn.innerText = getOptionLabel(opt);
        btn.addEventListener("click", () => checkQuizAnswer(opt.id, btn));
        quizOptionsEl.appendChild(btn);
    });
}

function checkQuizAnswer(selectedId, buttonEl) {
    const feedback = document.getElementById("quiz-feedback");
    const options = document.querySelectorAll(".quiz-opt-btn");
    const scoreVal = document.getElementById("quiz-score-val");

    if (!feedback || currentQuizQuestion === null) return;

    options.forEach(opt => opt.disabled = true); // Disable all options

    if (selectedId === currentQuizQuestion.correctId) {
        buttonEl.classList.add("correct");
        feedback.innerText = "✓ ถูกต้องแล้ว! ยอดเยี่ยมมาก!";
        feedback.className = "quiz-feedback-box correct";
        score += 10;
        if (scoreVal) scoreVal.innerText = score;
    } else {
        buttonEl.classList.add("incorrect");
        
        // Find correct option and highlight it
        options.forEach(opt => {
            const currOpt = currencyDatabase.find(c => c.name === opt.innerText || c.code === opt.innerText || `${c.name} (${c.code})` === opt.innerText);
            if (currOpt && currOpt.id === currentQuizQuestion.correctId) {
                opt.classList.add("correct");
            }
        });

        const correctObj = currencyDatabase.find(c => c.id === currentQuizQuestion.correctId);
        feedback.innerText = `✗ ยังไม่ถูก! คำตอบที่ถูกต้องคือ: ${correctObj.name} (${correctObj.code})`;
        feedback.className = "quiz-feedback-box incorrect";
    }

    currentQuizQuestion = null;

    // Load next question after delay
    setTimeout(() => {
        loadRandomQuiz();
    }, 3000);
}

// Show a simple toast notification
function showToast(message) {
    let toast = document.getElementById("toast-msg");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-msg";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
