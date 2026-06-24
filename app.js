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
        exchangeRate: 0.33, // 1 Denarius roughly equivalent to mock value of $3.00 USD (i.e. 0.33 Denarius = 1 USD)
        image: "images/roman_denarius.png",
        securityFeatures: [
            "ขอบของเหรียญที่ถูกตอกนูนแบบดั้งเดิม (Strike marks) เพื่อป้องกันการเจียรขอบเงินไปขาย",
            "ตราประทับของจักรพรรดิอย่างเป็นทางการ (Imperator Portrait) บนเนื้อเหรียญซึ่งลอกเลียนแบบได้ยากในยุคโบราณ",
            "คุณภาพและน้ำหนักของโลหะเงินแท้ที่ใช้ในการตรวจสอบผ่านการฟังเสียงกระทบโลหะ"
        ]
    }
];

// App State
let wallet = JSON.parse(localStorage.getItem("virtual_wallet")) || [];
let activeFilter = "all";
let searchQuery = "";
let currentQuizQuestion = null;
let score = 0;

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
    initApp();
});

function initApp() {
    renderCurrencies();
    setupEventListeners();
    setupConverter();
    updateWalletSidebar();
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
                        <span>1 USD = ${curr.exchangeRate} ${curr.code}</span>
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

// Setup Converter Calculator
function setupConverter() {
    const fromSelect = document.getElementById("convert-from");
    const toSelect = document.getElementById("convert-to");
    const amountInput = document.getElementById("convert-amount");
    const resultDiv = document.getElementById("convert-result-val");

    if (!fromSelect || !toSelect || !amountInput || !resultDiv) return;

    // Populate selects
    currencyDatabase.forEach(c => {
        const optFrom = document.createElement("option");
        optFrom.value = c.code;
        optFrom.innerText = `${c.name} (${c.code})`;
        fromSelect.appendChild(optFrom);

        const optTo = document.createElement("option");
        optTo.value = c.code;
        optTo.innerText = `${c.name} (${c.code})`;
        toSelect.appendChild(optTo);
    });

    // Add USD option since rate is based on USD
    const optUSDFrom = document.createElement("option");
    optUSDFrom.value = "USD";
    optUSDFrom.innerText = "ดอลลาร์สหรัฐ (USD)";
    optUSDFrom.selected = true;
    fromSelect.prepend(optUSDFrom);

    const optUSDTo = document.createElement("option");
    optUSDTo.value = "USD";
    optUSDTo.innerText = "ดอลลาร์สหรัฐ (USD)";
    toSelect.prepend(optUSDTo);

    // Set default value for To select
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
