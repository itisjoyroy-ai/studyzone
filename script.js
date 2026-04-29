const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzTZ1_PEt2-idsTUn16fiZuvsdSA6iRoUsHcFNWbdK5cjY4aHfoNTEsoauDPJbNggbf/exec";

const EXAM_DATE = "2026-04-29"; 
const START_TIME = "11:30:00";
const END_TIME = "12:15:00";

const studentDatabase = {
    "STUDENT_01": "WB_7821", "STUDENT_02": "WB_3456", "STUDENT_03": "WB_9012", "STUDENT_04": "WB_6678", "STUDENT_05": "WB_1122",
    "STUDENT_06": "WB_4433", "STUDENT_07": "WB_5599", "STUDENT_08": "WB_8877", "STUDENT_09": "WB_2211", "STUDENT_10": "WB_3300",
    "STUDENT_11": "WB_9988", "STUDENT_12": "WB_7722", "STUDENT_13": "WB_4455", "STUDENT_14": "WB_6699", "STUDENT_15": "WB_1234",
    "STUDENT_16": "WB_9043", "STUDENT_17": "WB_1189", "STUDENT_18": "WB_5567", "STUDENT_19": "WB_2234", "STUDENT_20": "WB_8890",
    "STUDENT_21": "WB_7761", "STUDENT_22": "WB_3345", "STUDENT_23": "WB_9901", "STUDENT_24": "WB_6612", "STUDENT_25": "WB_1109",
    "STUDENT_26": "WB_5544", "STUDENT_27": "WB_2288", "STUDENT_28": "WB_3377", "STUDENT_29": "WB_8811", "STUDENT_30": "WB_4490"
};

const quizData = [
    { q: "1. যদি 'CANDLE' কে 'EYPBLA' লেখা হয়, তবে 'FLAMING' কে কী লেখা হবে?", opt: ["HJCKLMP", "HKCKLOH", "HJCMLPH", "HKCMKPH"], ans: "HKCKLOH" },
    { q: "2. একটি কোডে 'GO' = 32, 'SHE' = 49 হলে, 'SOME' = কত?", opt: ["56", "58", "62", "64"], ans: "56" },
    { q: "3. 'MACHINE' যদি '19-7-9-14-15-20-11' হয়, তবে 'DANGER' = কী?", opt: ["10-7-20-13-11-24", "13-7-20-9-11-25", "11-7-20-16-11-24", "10-7-20-10-11-24"], ans: "10-7-20-13-11-24" },
    { q: "4. যদি 'SQUARE' কে '21-19-23-3-20-7' লেখা হয়, তবে 'RECTANGLE' এর কোড কী হবে?", opt: ["20-7-5-22-3-16-9-14-7", "20-7-5-21-3-16-9-13-7", "19-7-5-22-3-16-8-14-7", "20-8-5-22-3-15-9-14-7"], ans: "20-7-5-22-3-16-9-14-7" },
    { q: "5. 'ORANGE' কে 'ZYXWVU' লেখা হলে 'APPLE' কে কী লেখা যাবে?", opt: ["RKKZV", "RKKCV", "RKKGV", "RKKPV"], ans: "RKKZV" },
    { q: "6. 'ROSE' = '6821', 'CHAIR' = '73456', 'PREACH' = '961473' হলে 'SEARCH' = ?", opt: ["214673", "214763", "241763", "216473"], ans: "214673" },
    { q: "7. 'Z' = 52, 'ACT' = 48 হলে, 'BAT' = কত?", opt: ["39", "41", "44", "46"], ans: "46" },
    { q: "8. 'REQUEST' কে 'S2R52TU' লেখা হলে 'ACID' কে কী লেখা হবে?", opt: ["ID3E", "1D3E", "BDJE", "B3JE"], ans: "1D3E" },
    { q: "9. 'DELHI' কে 'CCIDD' লেখা হলে, 'BOMBAY' কে কী লেখা হবে?", opt: ["AMJXVS", "AJMTVT", "AMJXVT", "ANJYWT"], ans: "AMJXVS" },
    { q: "10. 'MONEY' = 144, 'PAY' = 81 হলে 'CREDIT' = কত?", opt: ["169", "225", "256", "324"], ans: "256" },
    { q: "11. 'ওর মা হলো আমার মায়ের একমাত্র মেয়ে'। অনিল ওই মেয়েটির কে হয়?", opt: ["ভাই", "পিতা", "মামা", "দাদু"], ans: "মামা" },
    { q: "12. A হলো B-এর বোন, C হলো B-এর মা, D হলো C-এর বাবা, E হলো D-এর মা। A-D সম্পর্ক কী?", opt: ["মেয়ে", "নাতনি", "ঠাকুমা", "মাসি"], ans: "নাতনি" },
    { q: "13. X ও Y ভাই। B হলো A-এর ভাই, কিন্তু A হলো X-এর মা। B-এর সাথে Y-এর সম্পর্ক কী?", opt: ["বাবা", "ভাই", "মামা", "কাকা"], ans: "মামা" },
    { q: "14. 'ওর স্বামীর একমাত্র বোন আমার মা'। জয়ের বাবা ওই মহিলার কে হন?", opt: ["ভাই", "স্বামী", "ভাসুর/দেওর", "বাবা"], ans: "ভাসুর/দেওর" },
    { q: "15. P + Q - R (যেখানে + পিতা, - মা), P-এর সাথে R-এর সম্পর্ক কী?", opt: ["দাদু", "বাবা", "মামা", "ভাইপো"], ans: "দাদু" },
    { q: "16. রাম ১৫ কিমি উঃ গিয়ে পশ্চিমে ১০ কিমি গেল। ৫ কিমি দঃ গিয়ে আবার পূর্বে ১০ কিমি গেল। দূরত্ব কত?", opt: ["৫ কিমি", "১০ কিমি", "১৫ কিমি", "২০ কিমি"], ans: "১০ কিমি" },
    { q: "17. সূর্যোদয়ের সময় সূর্যের দিকে ২ কিমি গিয়ে বামে ৪ কিমি হাঁটলে এখন কোন দিকে মুখ করে আছেন?", opt: ["উত্তর", "দক্ষিণ", "পূর্ব", "পশ্চিম"], ans: "উত্তর" },
    { q: "18. ঘড়িতে ৪:৩০ বাজে। মিনিটের কাঁটা পূর্বে থাকলে ঘণ্টার কাঁটা কোন দিকে থাকবে?", opt: ["উত্তর-পূর্ব", "দক্ষিণ-পূর্ব", "উত্তর-পশ্চিম", "দক্ষিণ-পশ্চিম"], ans: "উত্তর-পূর্ব" },
    { q: "19. A, B-এর ৪০ মি দঃ-পঃ এবং C, B-এর ৪০ মি দঃ-পূঃ হলে C, A-এর কোন দিকে?", opt: ["পূর্ব", "পশ্চিম", "উত্তর", "দক্ষিণ"], ans: "পূর্ব" },
    { q: "20. দঃ মুখী ব্যক্তি ১৩৫ ডিগ্রি বামে ও ১৮০ ডিগ্রি ডানে ঘুরলে কোন দিকে থাকবেন?", opt: ["দক্ষিণ-পূর্ব", "দক্ষিণ-পশ্চিম", "উত্তর-পূর্ব", "উত্তর-পশ্চিম"], ans: "দক্ষিণ-পশ্চিম" },
    { q: "21. 'MEASUREMENT' শব্দ দিয়ে কোনটি তৈরি করা যাবে না?", opt: ["MASTER", "MANTLE", "SUMMIT", "REASON"], ans: "MANTLE" },
    { q: "22. 'COMMUNICATION' এর অক্ষর জোড়া পাল্টালে ডানদিক থেকে ১০ম অক্ষর কী?", opt: ["U", "N", "M", "T"], ans: "N" },
    { q: "23. 'IMPASSIONABLE' দিয়ে নিচের কোনটি তৈরি করা যাবে?", opt: ["IMPASSABLE", "IMPASSION", "POSSIBLE", "IMPULSIVE"], ans: "IMPASSION" },
    { q: "24. 'P-R-A-E' দিয়ে কতগুলো অর্থপূর্ণ শব্দ সম্ভব?", opt: ["১টি", "২টি", "৩টি", "৪টি"], ans: "৩টি" },
    { q: "25. 'H-E-R-T-A' সাজিয়ে ফলের নাম করলে শেষ অক্ষর কী?", opt: ["A", "R", "T", "H"], ans: "H" },
    { q: "26. উচ্চতম কে? (১) S, R-র চেয়ে লম্বা কিন্তু T-র ছোট। (২) Q, P-র ছোট কিন্তু S-র লম্বা।", opt: ["শুধু ১", "শুধু ২", "১ ও ২ উভয়ই", "কোনটিই নয়"], ans: "১ ও ২ উভয়ই" },
    { q: "27. আজ কী বার? (১) গতকাল ছিল সোমবারের আগের দিন। (২) আগামীকাল বুধবার।", opt: ["শুধু ১", "শুধু ২", "যেকোনো একটি", "উভয়ই"], ans: "যেকোনো একটি" },
    { q: "28. 'Code' মানে কী? (১) 'Write Code' মানে 'ka pa'। (২) 'Easy Code' মানে 'ka de'।", opt: ["শুধু ১", "শুধু ২", "উভয়ই", "কোনটিই নয়"], ans: "উভয়ই" },
    { q: "29. M, N-এর কে হয়? (১) N হলো M-এর একমাত্র বোন। (২) M-এর বাবা হলেন N-এর বাবা।", opt: ["শুধু ১", "শুধু ২", "উভয়ই", "কোনটিই নয়"], ans: "শুধু ১" },
    { q: "30. সবচেয়ে কম ওজন কার? (১) A ও B, C-এর চেয়ে হালকা। (২) D, E-এর চেয়ে ভারী কিন্তু C-এর চেয়ে হালকা।", opt: ["শুধু ১", "শুধু ২", "উভয়ই", "কোনটিই নয়"], ans: "কোনটিই নয়" }
];

let currentQ = 0;
let userAnswers = [];
let examStarted = false;
let studentId = "";

async function checkAccess() {
    const now = new Date();
    const startTime = new Date(`${EXAM_DATE}T${START_TIME}`);
    const endTime = new Date(`${EXAM_DATE}T${END_TIME}`);

    if (now < startTime) {
        alert("পরীক্ষা ১১:৩০ এ শুরু হবে।"); return;
    }
    if (now > endTime) {
        alert("পরীক্ষার সময় শেষ।"); return;
    }

    studentId = document.getElementById('userid').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (studentDatabase[studentId] === pass) {
        try {
            await document.documentElement.requestFullscreen();
            sessionStorage.setItem("examUser", studentId);
            window.location.href = "quiz.html";
        } catch (err) { alert("ফুল স্ক্রিন মোড অন করুন!"); }
    } else { alert("ভুল আইডি বা পাসওয়ার্ড!"); }
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        const now = new Date();
        const endTime = new Date(`${EXAM_DATE}T${END_TIME}`);
        const diff = endTime - now;

        if (diff <= 0) {
            clearInterval(interval); finishExam("Time Over"); return;
        }

        const mins = Math.floor(diff / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        timerElement.innerText = `সময় বাকি: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }, 1000);
}

window.onload = () => {
    if (window.location.pathname.includes("quiz.html")) {
        studentId = sessionStorage.getItem("examUser");
        if (!studentId) { window.location.href = "index.html"; return; }
        examStarted = true;
        startTimer();
        loadQuestion();
    }
};

function loadQuestion() {
    const qData = quizData[currentQ];
    document.getElementById('q-title').innerText = qData.q;
    document.getElementById('q-count').innerText = `প্রশ্ন: ${currentQ + 1}/৩০`;
    const optDiv = document.getElementById('options');
    optDiv.innerHTML = "";
    qData.opt.forEach(o => {
        const btn = document.createElement("button");
        btn.innerText = o;
        btn.onclick = () => {
            userAnswers.push({ question: qData.q, selected: o });
            if (currentQ < quizData.length - 1) {
                currentQ++; loadQuestion();
            } else {
                finishExam("Completed Successfully");
            }
        };
        optDiv.appendChild(btn);
    });
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden && examStarted) {
        finishExam("Auto-Submit: Tab Switched");
        alert("ট্যাব পরিবর্তন করায় পরীক্ষা বাতিল ও সাবমিট হলো!");
    }
});

function finishExam(status) {
    if (!examStarted) return;
    examStarted = false;
    const payload = { userId: studentId, status: status, answers: userAnswers };
    fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(payload) });
    document.body.innerHTML = "<div class='container'><h1>পরীক্ষা শেষ।</h1><p>আপনার উত্তর সফলভাবে রেকর্ড করা হয়েছে।</p></div>";
    sessionStorage.clear();
                  }

