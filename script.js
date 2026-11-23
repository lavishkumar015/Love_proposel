// A Rose For You — 1,000 longer, complete shayari combinations per language.
// Each poem combines three complete poetic stanzas (10 x 10 x 10).

const poems = {
  hi: {
    a: [
      "तेरी मुस्कान से मेरी सुबह का आगाज़ होता है,\nतेरे ख्यालों में ही मेरा हर खूबसूरत एहसास होता है।",
      "तू पास हो तो हर मौसम सुहाना लगता है,\nतेरे बिना ये दिल थोड़ा अनजाना लगता है।",
      "ना चाँद की ख्वाहिश है, ना सितारों की फरमाइश है,\nमेरी हर छोटी-बड़ी खुशी में बस तेरी ही गुंजाइश है।",
      "तेरी आँखों में देखा तो एक प्यारा-सा जहाँ मिला,\nमेरे बेचैन से दिल को जैसे अपना आसमाँ मिला।",
      "तेरी बातों में वो जादू है जो कहीं और नहीं,\nतेरे जैसा खूबसूरत एहसास किसी दौर में नहीं।",
      "जब भी तेरा नाम मेरी ज़ुबाँ पर आता है,\nबिना वजह ये चेहरा मुस्कुराता जाता है।",
      "तू मिले तो लगे जैसे दुआ कबूल हो गई,\nमेरी अधूरी-सी दुनिया मुकम्मल हो गई।",
      "तेरे साथ चलूँ तो रास्ते भी गीत सुनाते हैं,\nतेरे संग बिताए पल उम्र भर याद आते हैं।",
      "मेरी खामोशी भी तुझसे बातें करती है,\nमेरी हर धड़कन बस तेरा नाम पढ़ती है।",
      "तुझे सोचकर ही दिल को सुकून मिल जाता है,\nजैसे तपती धूप में कोई बादल छा जाता है।"
    ],
    b: [
      "मैं वादा नहीं करता कि हर दिन आसान होगा,\nपर इतना ज़रूर है कि मुश्किल में तेरा हाथ मेरे हाथ में होगा।",
      "तेरी खुशी मेरी दुआओं में सबसे पहले रहती है,\nतेरी हँसी मेरे दिल की सबसे प्यारी दौलत रहती है।",
      "कभी नाराज़ हो तो मुझे प्यार से मना लेना,\nकभी उदास हो तो अपना सिर मेरे कंधे पर रख देना।",
      "मैं तेरी हर बात को ध्यान से सुनना चाहता हूँ,\nतेरे सपनों के रास्ते में साथ चलना चाहता हूँ।",
      "ना तुझसे कोई वादा आसमान जितना बड़ा करूँगा,\nबस हर छोटे पल में तेरा साथ निभाने की कोशिश करूँगा।",
      "तेरे सपनों को भी अपने सपनों-सा मानूँगा,\nतेरी जीत पर तुझसे ज़्यादा मैं मुस्कुराऊँगा।",
      "अगर कभी दुनिया तुझे समझ न पाए,\nयाद रखना, एक दिल है जो तुझे बिना शर्त अपनाए।",
      "तेरी कमियों से भी मुझे कोई शिकायत नहीं होगी,\nमोहब्बत सच्ची हो तो हर बात में खूबसूरती होगी।",
      "तेरे साथ हँसना, तेरे साथ खामोश रहना अच्छा लगता है,\nतेरे हर रंग को अपनाना मुझे सच्चा लगता है।",
      "मैं तुझे बदलने नहीं, तुझे समझने आना चाहता हूँ,\nतेरी अपनी पहचान के साथ तेरा हमसफ़र बनना चाहता हूँ।"
    ],
    c: [
      "बस इतनी-सी आरज़ू है, तू हमेशा मुस्कुराती रहे,\nऔर मेरी हर दुआ में तेरी खुशियों की रोशनी आती रहे। ❤️",
      "अगर इजाज़त हो तो उम्र भर का साथ माँग लूँ,\nतेरे हर कल में अपने आज का एहसास माँग लूँ। 🌹",
      "मोहब्बत का मतलब मेरे लिए बस इतना-सा है,\nतेरी खुशी में खुश रहना, चाहे दिन कैसा भी हो। 💗",
      "तू मेरी कहानी का सबसे हसीन हिस्सा रहे,\nतेरे चेहरे पर हर मौसम में मुस्कान ज़िंदा रहे। ✨",
      "ना हर पल पास होने की ज़िद, ना कोई शर्त रखूँगा,\nतेरी इज़्ज़त और तेरी खुशी को हमेशा सबसे ऊपर रखूँगा। 💕",
      "कभी हाथ थामना चाहो तो मेरा हाथ यहीं मिलेगा,\nसफर लंबा हो या छोटा, साथ सच्चा ही मिलेगा। 🥰",
      "तू मेरी पसंद ही नहीं, मेरी प्यारी-सी दुआ है,\nतेरे होने से ही इस दिल को जीने की वजह मिली है। 💌",
      "कल क्या होगा ये वक्त जाने, आज इतना कहता हूँ,\nतेरे साथ हर सच्चे पल को दिल से जीना चाहता हूँ। 🌸",
      "मेरी चाहत में दिखावा नहीं, बस सच्चाई रहे,\nतेरे हर फैसले में तेरी मर्ज़ी और भलाई रहे। ❤️",
      "अगर तू भी चाहे तो एक नई शुरुआत करते हैं,\nदो अजनबी नहीं, दो दिल मिलकर खूबसूरत कहानी लिखते हैं। 💍"
    ]
  },
  en: {
    a: [
      "Your smile feels like sunrise after the longest night,\nA little piece of warmth that makes everything feel right.",
      "When you are near, even silence has a song,\nAnd every ordinary moment feels like where I belong.",
      "I don't need a sky filled with a million stars,\nYour laughter is enough to heal my little scars.",
      "I found a softer world somewhere inside your eyes,\nA place where every hope can learn again to rise.",
      "Your voice is like a melody my heart already knew,\nAnd every day feels brighter when I get to talk to you.",
      "Whenever someone speaks your name, I cannot help but smile,\nYou make the simplest moments feel worthwhile.",
      "If wishes could become real, I'd make just one come true,\nTo see a thousand happy mornings waiting there for you.",
      "The roads feel less lonely whenever we walk side by side,\nBecause the best part of every journey is having you as my guide.",
      "Even when I say nothing, my heart has words for you,\nIn every quiet heartbeat, there is something warm and true.",
      "Thinking of you brings peace no crowded place can give,\nYou remind my restless heart how beautiful it is to live."
    ],
    b: [
      "I cannot promise every day will be easy or bright,\nBut I will try to stand beside you through the rain and light.",
      "Your happiness will always matter more than being right,\nI want to be the calm that helps you sleep at night.",
      "If some day you feel low, you never have to pretend,\nYou can bring your tired heart to me, your partner and your friend.",
      "I want to hear your stories, your big dreams and your fears,\nAnd cheer for every little victory through the years.",
      "I will never ask you to become somebody new,\nI want to know and love the real and honest you.",
      "Your dreams are yours, and I will never make them small,\nI'll celebrate your every step, your courage and it all.",
      "If the world feels loud and no one understands your view,\nI hope you'll know there's someone who will listen through and through.",
      "I know that love is not a promise made in one sweet night,\nIt's choosing care and kindness, again and doing right.",
      "I want the silly laughter and the quiet evenings too,\nThe little everyday moments that feel special just with you.",
      "I want to learn your language, every silence and every part,\nNot to change the way you are, but understand your heart."
    ],
    c: [
      "So here's my simple wish, wherever life may lead,\nMay you keep finding joy, and may you always feel free. ❤️",
      "If you feel the same, I'd love to walk this road with you,\nAnd make a thousand little memories, honest and true. 🌹",
      "To me, love means respect, patience, and being kind,\nA safe and gentle place where two hearts intertwine. 💗",
      "May your days be full of wonder, your nights be soft and bright,\nAnd may I get the chance to make you smile tonight. ✨",
      "No pressure, no expectations, your choice will always matter,\nI only hope my words can make your heart feel a little lighter. 💕",
      "Whenever you need a hand, I hope mine will be near,\nNot to lead your every step, but walk with you, my dear. 🥰",
      "You are not just a passing thought or a beautiful view,\nYou are someone I feel lucky to be getting to know, truly. 💌",
      "I cannot tell what tomorrow holds or where our paths may go,\nBut every honest moment with you is a gift I want to know. 🌸",
      "My feelings come with honesty, not a demand or plea,\nYour dreams, your space, your happiness will always matter to me. ❤️",
      "And if your heart says yes, let's write a brand-new start,\nTwo people, one sweet journey, with kindness at its heart. 💍"
    ]
  },
  mix: {
    a: [
      "Tumhari smile se meri har morning bright ho jaati hai,\nTumhari ek jhalak se dil ki tension door ho jaati hai.",
      "Tum paas ho toh ordinary moments bhi special lagte hain,\nTum door ho toh simple se din bhi thode empty lagte hain.",
      "Na moon chahiye, na stars ki demand hai,\nMere liye tumhari smile hi sabse beautiful gift hai.",
      "Tumhari eyes mein ek alag sa magic nazar aata hai,\nJise dekhkar mera restless heart bhi smile kar jaata hai.",
      "Tumhari baaton mein ek sweet si melody hai,\nTumhare saath har moment ek lovely memory hai.",
      "Jab bhi tumhara naam screen par aata hai,\nMere face par automatically smile aa jaata hai.",
      "Tum mili toh laga jaise wish complete ho gayi,\nMeri little si world aur bhi beautiful ho gayi.",
      "Tumhare saath walk karna bhi adventure lagta hai,\nTumhare saath silence bhi conversation lagta hai.",
      "Main kuch na kahun phir bhi dil tumse baat karta hai,\nHar heartbeat quietly tumhara naam leta hai.",
      "Tumhara khayal aate hi heart ko peace milta hai,\nJaise busy day ke baad favourite song milta hai."
    ],
    b: [
      "I can't promise every day perfect hoga,\nBut difficult time mein mera support tumhare saath hoga.",
      "Tumhari happiness meri priority rahegi,\nTumhari smile meri favourite achievement rahegi.",
      "Kabhi sad feel ho toh pretend mat karna,\nBas mujhse baat kar lena, everything inside mat rakhna.",
      "Main tumhare dreams aur plans sunna chahta hoon,\nHar little achievement par tumhare saath celebrate karna chahta hoon.",
      "Main tumhe change karne ki koshish nahi karunga,\nReal you ko samajhne ki hamesha koshish karunga.",
      "Tumhare dreams tumhare hain, unhe fly karne dena,\nMain cheerleader bankar tumhe encourage karta rahunga.",
      "Agar world tumhari baat na samjhe kabhi,\nI hope tumhe pata ho, I'll listen patiently.",
      "Love sirf sweet words bolne ka naam nahi hota,\nIt means respect, trust aur tough days mein saath hona.",
      "Mujhe tumhari silly laughter aur quiet moments bhi pasand hain,\nBecause tumhare saath little things bhi special hain.",
      "Main tumhari har feeling ko samajhna chahta hoon,\nWithout changing you, tumhara true friend banna chahta hoon."
    ],
    c: [
      "Bas meri wish hai tum hamesha smile karti raho,\nAur tumhari life mein happiness ke flowers khilte raho. ❤️",
      "Agar tum bhi chaho toh saath walk kar sakte hain,\nLet's make honest memories jo lifetime yaad rahein. 🌹",
      "For me love means respect, care aur understanding,\nEk safe sa bond, without pressure or pretending. 💗",
      "Tumhare days beautiful hon aur nights peaceful rahein,\nAur tumhari smile ke reasons hamesha special rahein. ✨",
      "No pressure, no force, tumhari choice sabse important hai,\nBas dil ki baat share karna meri little si intent hai. 💕",
      "Kabhi support chahiye ho toh I hope mera hand near ho,\nMain tumhe lead nahi, tumhare saath walk karna chahta hoon. 🥰",
      "Tum sirf ek thought nahi, ek beautiful feeling ho,\nI feel lucky ki tum meri life mein ek lovely meeting ho. 💌",
      "Tomorrow kya hoga, ye kisi ko nahi pata,\nBut tumhare saath honest moments feel like a gift, sach bataun toh. 🌸",
      "Meri feelings honest hain, koi demand ya condition nahi,\nTumhari happiness se badhkar mere liye kuch bhi nahi. ❤️",
      "Agar tumhara heart bhi yes kahe toh new story start karte hain,\nTwo hearts, lots of kindness, aur beautiful memories create karte hain. 💍"
    ]
  }
};

const shayariText = document.getElementById("shayariText");
const counter = document.getElementById("counter");
const languageButtons = document.querySelectorAll(".lang-btn");
const toast = document.getElementById("toast");
let language = "hi";
let currentIndex = 0;
const TOTAL = 1000;

function makeShayari(index, lang) {
  const set = poems[lang];
  const a = Math.floor(index / 100);
  const b = Math.floor(index / 10) % 10;
  const c = index % 10;
  return `${set.a[a]}\n\n${set.b[b]}\n\n${set.c[c]}`;
}

function renderShayari() {
  shayariText.style.opacity = "0";
  shayariText.style.transform = "translateY(9px)";
  window.setTimeout(() => {
    shayariText.textContent = makeShayari(currentIndex, language);
    counter.textContent = `${String(currentIndex + 1).padStart(3, "0")} / ${TOTAL}`;
    shayariText.style.opacity = "1";
    shayariText.style.transform = "translateY(0)";
  }, 180);
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  languageButtons.forEach(button => button.classList.toggle("active", button.dataset.lang === language));
  renderShayari();
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % TOTAL;
  renderShayari();
});
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + TOTAL) % TOTAL;
  renderShayari();
});
document.getElementById("randomBtn").addEventListener("click", () => {
  let next;
  do { next = Math.floor(Math.random() * TOTAL); } while (next === currentIndex);
  currentIndex = next;
  renderShayari();
  showToast("A little surprise, just for you ✨");
});
languageButtons.forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

document.getElementById("openProposal").addEventListener("click", () => {
  const card = document.getElementById("answerCard");
  card.hidden = false;
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  petalShower(18);
});
document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("response").innerHTML =
    "Yay! ❤️ You just made this moment unforgettable.<br>हमारी कहानी का यह सबसे खूबसूरत पल है। 🌹";
  petalShower(70);
  showToast("Sending you a thousand virtual roses 🌹");
});
document.getElementById("thinkBtn").addEventListener("click", () => {
  document.getElementById("response").textContent =
    "Take all the time you need. Your happiness matters most. 🌷";
  showToast("No pressure — only good feelings 💗");
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function petalShower(count = 12) {
  const symbols = ["🌸", "🌹", "💗", "♥"];
  for (let i = 0; i < count; i++) {
    window.setTimeout(() => {
      const petal = document.createElement("span");
      petal.className = "petal-fall";
      petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.fontSize = `${14 + Math.random() * 17}px`;
      petal.style.animationDuration = `${3 + Math.random() * 3}s`;
      document.body.appendChild(petal);
      window.setTimeout(() => petal.remove(), 6500);
    }, i * 45);
  }
}

const sparkleLayer = document.getElementById("sparkleLayer");
for (let i = 0; i < 24; i++) {
  const star = document.createElement("span");
  star.className = "sparkle";
  star.textContent = i % 3 === 0 ? "✦" : "·";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 12}px`;
  star.style.animationDelay = `${Math.random() * 4}s`;
  sparkleLayer.appendChild(star);
}

renderShayari();
