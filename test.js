const questions = [
    {
        title: "Чого ви хочете досягти?",
        subtitle: "Усі великі зміни починаються з цілі.",
        type: "radio",
        name: "goal",
        options: [
            "😟 Впоратися з тривогою або стресом",
            "🎯 Знайти себе, цілі та сенси",
            "💙 Побудувати здорові стосунки",
            "🌿 Вийти з депресивного стану",
            "⚡ Покращити якість життя",
            "🦁 Підвищити самооцінку",
            "🍏 Налагодити харчову поведінку",
            "✨ Інший запит"
        ]
    },
    {
        title: "Чудова ціль 💪 Давайте конкретизуємо",
        subtitle: "Можна обрати кілька варіантів 😊",
        type: "checkbox",
        name: "stressDetails",
        options: [
            "💼 Впоратись зі стресом на роботі",
            "😨 Подолати страхи та фобії",
            "😴 Налагодити режим сну",
            "😤 Позбутись роздратованості",
            "🧘 Навчитися спокійно реагувати на негативні події",
            "✨ Інше"
        ]
    },
    {
        title: "Якої ви статі?",
        subtitle: "",
        type: "radio",
        name: "gender",
        options: [
            "👩 Жіночої",
            "👨 Чоловічої",
            "🕶️ Не хочу вказувати"
        ]
    },
    {
        title: "Якого ви віку?",
        subtitle: "",
        type: "radio",
        name: "age",
        options: [
            "18–24",
            "25–34",
            "35–44",
            "45–54",
            "55+",
            "Не хочу вказувати"
        ]
    },
    {
        title: "Який у вас сімейний статус?",
        subtitle: "",
        type: "radio",
        name: "status",
        options: [
            "Не в стосунках",
            "У стосунках",
            "Одружений / Одружена",
            "Розлучений / Розлучена",
            "Вдівець / Вдова",
            "Не хочу вказувати"
        ]
    },
    {
        title: "Круто! Ми з вами трохи познайомились 🤝",
        subtitle: "А тепер давайте дізнаємося більше про ваш психологічний стан, щоб надати найкращу підтримку 💙",
        type: "info"
    },
    {
        title: "Як ви опишете свій емоційний стан останні 2 тижні?",
        subtitle: "Це допоможе краще зрозуміти, яка підтримка вам потрібна.",
        type: "radio",
        name: "mood",
        options: [
            "😞 Почуваюсь погано",
            "⚖️ Почуваюсь середньо",
            "🌈 Почуваюсь чудово",
            "🌫️ Складно сказати"
        ]
    },
    {
        title: "Чи відчуваєте ви зараз тривогу, панічні атаки або маєте фобії?",
        subtitle: "Деякі симптоми можуть проявлятися через серцебиття, напругу або страх.",
        type: "radio",
        name: "anxiety",
        options: [
            "Так",
            "Ні"
        ]
    },
    {
        title: "Як ви оцінюєте якість вашого сну?",
        subtitle: "Якість сну сильно впливає на самопочуття.",
        type: "radio",
        name: "sleep",
        options: [
            "Погано",
            "Середньо",
            "Добре"
        ]
    },
    {
    title: "Як часто за останні 2 тижні у вас був поганий апетит або переїдання?",
    subtitle: "",
    type: "radio",
    name: "appetite",
    options: [
        "Взагалі не було",
        "Протягом декількох днів",
        "Дуже часто",
        "Практично щодня"
    ]
},
{
    title: "Чи відчуваєте ви втому, коли встаєте вранці?",
    subtitle: "",
    type: "radio",
    name: "morningTiredness",
    options: [
        "😴 Так, щодня",
        "😧 Дуже часто",
        "😟 Іноді",
        "😎 Ні"
    ]
},
{
    title: "Як часто за останні 2 тижні у вас виникали труднощі з концентрацією уваги?",
    subtitle: "Наприклад, зосередитися на фільмі, роботі або читанні.",
    type: "radio",
    name: "concentration",
    options: [
        "Взагалі не виникали",
        "Протягом декількох днів",
        "Більше половини цього часу",
        "Майже кожного дня"
    ]
},
{
    title: "Працюючи з психотерапевтом, ви можете швидше досягти стабільних позитивних результатів",
    subtitle: "Терапія допомагає краще зрозуміти себе та рухатися до змін поступово.",
    type: "info"
},
{
    title: "Я часто думаю про те, щоб звернутися до психотерапевта, але не маю на це часу або сил",
    subtitle: "Чи погоджуєтесь ви з цим твердженням?",
    type: "radio",
    name: "therapyTimeBarrier",
    options: [
        "Так",
        "Ні"
    ]
},
{
    title: "Чи відчуваєте ви, що маєте достатньо часу для відпочинку?",
    subtitle: "",
    type: "radio",
    name: "restTime",
    options: [
        "🏖️ Так",
        "🌤️ Скоріше так",
        "😐 Не знаю",
        "🧘 Скоріше ні",
        "⛰️ Ні"
    ]
},
{
    title: "Коли мені емоційно погано, я звертаюсь по допомогу до друзів",
    subtitle: "Чи погоджуєтесь ви з цим твердженням?",
    type: "radio",
    name: "friendsSupport",
    options: [
        "Так",
        "Ні"
    ]
},
{
    title: "Звертатися до друзів за психологічною підтримкою не завжди корисно",
    subtitle: "Психотерапевт допомагає неупереджено подивитися на ситуацію та знайти рішення.",
    type: "info"
},
{
    title: "Яким спортом ви займались або продовжуєте займатись?",
    subtitle: "",
    type: "checkbox",
    name: "sport",
    options: [
        "🏃 Біг",
        "🏊 Плавання",
        "🧘 Йога",
        "🤸 Гімнастика",
        "🎾 Теніс",
        "💃 Танці",
        "🏓 Інший",
        "🚫 Не займаюсь спортом"
    ]
},
{
    title: "Ми майже закінчили, залишилось кілька питань",
    subtitle: "Щоб підібрати відповідного спеціаліста, потрібно краще зрозуміти ваші цінності та очікування.",
    type: "info"
},
{
    title: "Ви відчуваєте, що маєте сформовані життєві цінності?",
    subtitle: "",
    type: "radio",
    name: "values",
    options: [
        "😇 Так",
        "🥺 Ні"
    ]
},
{
    title: "Чи завжди ви чітко розумієте, чого саме хочете?",
    subtitle: "",
    type: "radio",
    name: "clarity",
    options: [
        "Так",
        "Ні"
    ]
},
{
    title: "Ви відчуваєте задоволення від того, як складається ваше життя зараз?",
    subtitle: "",
    type: "radio",
    name: "lifeSatisfaction",
    options: [
        "👍 Так",
        "👎 Ні"
    ]
},
{
    title: "Ви працювали з психотерапевтом раніше?",
    subtitle: "",
    type: "radio",
    name: "therapyExperience",
    options: [
        "Так",
        "Ні"
    ]
},
{
    title: "У нас є гарні новини!",
    subtitle: "На основі ваших відповідей ми зможемо підібрати спеціалістів, які найкраще відповідають вашому запиту.",
    type: "info"
},
{
    title: "З ким вам буде комфортніше працювати?",
    subtitle: "Можна обрати кілька варіантів.",
    type: "checkbox",
    name: "therapistGender",
    options: [
        "👨 З чоловіком",
        "👩 З жінкою",
        "Не важливо"
    ]
},
{
    title: "Якого спеціаліста ви шукаєте?",
    subtitle: "Можна обрати кілька варіантів.",
    type: "checkbox",
    name: "specialistType",
    options: [
        "🧠 Психолог",
        "📋 Психотерапевт",
        "🧩 Гештальт-терапевт",
        "📝 Психоаналітик",
        "❤️ Сексолог",
        "👨‍🏫 Коуч",
        "👨‍⚕️ Психіатр",
        "🤔 Не знаю"
    ]
},
{
    title: "Які особистісні якості психотерапевта для вас важливі?",
    subtitle: "Можна обрати кілька варіантів.",
    type: "checkbox",
    name: "therapistQualities",
    options: [
        "Емпатія та розуміння",
        "Досвід та професіоналізм",
        "Позитивний та мотивуючий підхід",
        "Доступність та гнучкість у графіку"
    ]
},

{
    title: "Якому методу роботи ви віддаєте перевагу?",
    subtitle: "Можна обрати кілька варіантів 😊",
    type: "checkbox",
    name: "therapyMethod",
    options: [
        "Когнітивно-поведінкова терапія",
        "Гештальт-підхід",
        "Mindfulness",
        "Інтегративний підхід",
        "Психоаналіз",
        "Коучинг",
        "Сексологія",
        "Не знаю"
    ]
},
{
    title: "Наскільки важлива для вас вартість послуг психотерапевта?",
    subtitle: "",
    type: "radio",
    name: "priceImportance",
    options: [
        "Дуже важлива, шукаю бюджетні варіанти",
        "Важлива, але готовий/готова платити за якість",
        "Не важлива, головне — якість і досвід"
    ]
},
{
    title: "Скільки вам комфортно платити за один 50-хвилинний сеанс?",
    subtitle: "",
    type: "radio",
    name: "budget",
    options: [
        "до 1000 грн",
        "до 1500 грн",
        "до 2000 грн",
        "до 2500 грн",
        "Без різниці"
    ]
}

];

let currentStep = 0;
const answers = {};

const testContent = document.getElementById("testContent");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const progressFill = document.getElementById("progressFill");

function renderQuestion() {
    const question = questions[currentStep];

    progressFill.style.width = `${((currentStep + 1) / questions.length) * 100}%`;

    if (question.type === "info") {
        testContent.innerHTML = `
            <div class="test-illustration">💙</div>
            <h1>${question.title}</h1>
            <p class="test-subtitle">${question.subtitle}</p>
        `;

        nextBtn.textContent = "Продовжити";
        return;
    }

    const optionsHtml = question.options.map((option, index) => {
        return `
            <label class="test-option">
                <span>${option}</span>
                <input 
                    type="${question.type}" 
                    name="${question.name}" 
                    value="${index}"
                >
            </label>
        `;
    }).join("");

    testContent.innerHTML = `
        <h1>${question.title}</h1>
        ${question.subtitle ? `<p class="test-subtitle">${question.subtitle}</p>` : ""}
        <form class="test-options">
            ${optionsHtml}
        </form>
    `;

    nextBtn.textContent = currentStep === questions.length - 1 ? "Показати спеціалістів" : "Далі";
}

nextBtn.addEventListener("click", function () {
    const question = questions[currentStep];

    if (question.type !== "info") {
        const selected = document.querySelectorAll(`input[name="${question.name}"]:checked`);

        if (selected.length === 0) {
            alert("Оберіть хоча б один варіант");
            return;
        }

        answers[question.name] = Array.from(selected).map(input => input.value);
    }

    if (currentStep < questions.length - 1) {
        currentStep++;
        renderQuestion();
    } else {
        console.log("Відповіді користувача:", answers);
        window.location.href = "results.html";
    }
});

backBtn.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        renderQuestion();
    } else {
        window.location.href = "index.html";
    }
});

renderQuestion();