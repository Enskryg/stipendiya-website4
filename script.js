// Создаем плавающие частицы при загрузке страницы
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайные параметры
        const size = Math.random() * 20 + 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.top = `${top}vh`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Случайный цвет
        const colors = [
            'rgba(116, 185, 255, 0.3)',
            'rgba(255, 107, 107, 0.3)',
            'rgba(129, 236, 236, 0.3)',
            'rgba(255, 234, 167, 0.3)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// Обновляем функцию showSection с улучшенными анимациями
function showSection(section) {
    const content = contentData[section];
    
    if (!content) return;

    // Анимация исчезновения текущего контента
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.style.opacity = '0';
    dynamicContent.style.transform = 'translateY(20px)';

    setTimeout(() => {
        // Обновляем заголовок с анимацией
        const mainTitle = document.getElementById('main-title');
        mainTitle.style.opacity = '0';
        mainTitle.style.transform = 'scale(0.8)';
        
        // Обновляем динамический контент
        dynamicContent.innerHTML = content.content;
        
        // Обновляем логотип
        document.getElementById('main-logo').src = content.image;
        document.getElementById('logo-text').textContent = content.logoText;

        // Анимация появления нового контента
        setTimeout(() => {
            mainTitle.textContent = content.title;
            mainTitle.style.opacity = '1';
            mainTitle.style.transform = 'scale(1)';
            
            dynamicContent.style.opacity = '1';
            dynamicContent.style.transform = 'translateY(0)';
        }, 200);
    }, 300);

    // Обновляем активную кнопку с анимацией
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.style.background = '';
        btn.style.transform = 'scale(1)';
    });
    
    const activeBtn = document.getElementById(section + '-btn');
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        activeBtn.style.color = 'white';
        activeBtn.style.transform = 'scale(1.05)';
    }
}

// Улучшенный калькулятор с анимацией
function calculateScholarship() {
    const type = document.getElementById('scholarship-type').value;
    const grades = parseFloat(document.getElementById('grades').value);
    const activities = document.getElementById('activities').value;

    let baseAmount = 0;
    
    switch(type) {
        case 'academic':
            baseAmount = 3000;
            break;
        case 'social':
            baseAmount = 4500;
            break;
        case 'special':
            baseAmount = 7500;
            break;
    }

    // Бонус за оценки
    let gradeBonus = 0;
    if (grades >= 4.5) gradeBonus = 500;
    if (grades >= 4.8) gradeBonus = 1000;

    // Бонус за активности
    let activityBonus = 0;
    if (activities === 'some') activityBonus = 300;
    if (activities === 'active') activityBonus = 700;

    const total = baseAmount + gradeBonus + activityBonus;

    const resultDiv = document.getElementById('calculation-result');
    resultDiv.style.opacity = '0';
    resultDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div style="text-align: center;">
                <h3 style="color: #2d3436; margin-bottom: 20px;">🎉 Результат расчета:</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px;">
                        <strong>Базовая стипендия</strong><br>${baseAmount} руб.
                    </div>
                    <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px;">
                        <strong>Бонус за оценки</strong><br>${gradeBonus} руб.
                    </div>
                    <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px;">
                        <strong>Бонус за активности</strong><br>${activityBonus} руб.
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, #ff6b6b, #ffa726); padding: 20px; border-radius: 15px; color: white;">
                    <h4 style="margin: 0; font-size: 1.4em;">💰 Итого: ${total} руб./мес</h4>
                </div>
            </div>
        `;
        
        resultDiv.style.opacity = '1';
        resultDiv.style.transform = 'translateY(0)';
    }, 300);
}

// Улучшенные обработчики клавиш с анимацией
document.addEventListener('keydown', function(event) {
    const container = document.querySelector('.container');
    const logo = document.getElementById('main-logo');
    
    if (!container || !logo) return;
    
    // Анимация изменения
    container.style.transition = 'all 0.5s ease';
    logo.style.transition = 'all 0.5s ease';
    
    switch(event.key.toLowerCase()) {
        case 'r': // Красный фон
            container.style.background = 'linear-gradient(135deg, rgba(255, 235, 238, 0.95), rgba(255, 205, 210, 0.9))';
            break;
        case 'g': // Зеленый фон
            container.style.background = 'linear-gradient(135deg, rgba(232, 245, 233, 0.95), rgba(200, 230, 201, 0.9))';
            break;
        case 'b': // Синий фон
            container.style.background = 'linear-gradient(135deg, rgba(227, 242, 253, 0.95), rgba(187, 222, 251, 0.9))';
            break;
        case 'y': // Желтая рамка
            logo.style.borderColor = '#ffd600';
            logo.style.boxShadow = '0 0 30px rgba(255, 214, 0, 0.5)';
            break;
        case 'p': // Фиолетовая рамка
            logo.style.borderColor = '#ce93d8';
            logo.style.boxShadow = '0 0 30px rgba(206, 147, 216, 0.5)';
            break;
        case 'o': // Оранжевая рамка
            logo.style.borderColor = '#ffb74d';
            logo.style.boxShadow = '0 0 30px rgba(255, 183, 77, 0.5)';
            break;
        case ' ': // Сброс цветов
            container.style.background = '';
            logo.style.borderColor = '#ff6b6b';
            logo.style.boxShadow = '';
            break;
    }
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    
    // Проверяем, есть ли динамический контент (только на главной странице)
    if (document.getElementById('dynamic-content')) {
        showSection('general');
        
        // Добавляем анимацию для всех элементов при загрузке
        const animatedElements = document.querySelectorAll('.post, .content-block, table');
        animatedElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }
});

// Объект данных для динамического контента
const contentData = {
    general: {
        title: "Стипендии и финансовая помощь",
        content: `
            <div class="post">
                <p class="intro">Добро пожаловать на портал информации о стипендиях и финансовой поддержке студентов.</p>
                <p>Наш университет предоставляет различные виды финансовой помощи для обеспечения доступности качественного образования.</p>
            </div>

            <div class="content-block">
                <h2>Виды стипендий</h2>
                <ul>
                    <li>🎯 Академическая стипендия</li>
                    <li>🤝 Социальная стипендия</li>
                    <li>⭐ Именные стипендии</li>
                    <li>🎓 Стипендии для аспирантов</li>
                    <li>🚀 Повышенная стипендия</li>
                    <li>🏆 Стипендия Президента РФ</li>
                </ul>
            </div>

            <div class="content-block">
                <h2>Топ-5 причин подать заявление на стипендию</h2>
                <ol>
                    <li>💪 Финансовая независимость</li>
                    <li>📚 Поощрение академических успехов</li>
                    <li>🎯 Возможность сосредоточиться на учебе</li>
                    <li>🌟 Дополнительные возможности для развития</li>
                    <li>🤗 Поддержка в трудной жизненной ситуации</li>
                </ol>
            </div>

            <blockquote>
                "Образование должно быть доступно каждому - именно для этого существует система стипендий и грантов."
            </blockquote>

            <table>
                <tr>
                    <th>Вид стипендии</th>
                    <th>Размер (руб./мес)</th>
                    <th>Условия получения</th>
                </tr>
                <tr>
                    <td>Академическая</td>
                    <td>3000</td>
                    <td>Успеваемость без троек</td>
                </tr>
                <tr>
                    <td>Социальная</td>
                    <td>4500</td>
                    <td>Подтвержденный социальный статус</td>
                </tr>
                <tr>
                    <td>Именная</td>
                    <td>5000-10000</td>
                    <td>Особые достижения в учебе/науке</td>
                </tr>
            </table>
        `,
        image: "OIP.webp",
        logoText: "СТИПЕНДИИ • ПОМОЩЬ • ОБРАЗОВАНИЕ"
    },
    application: {
        title: "Подача заявления на стипендию",
        content: `
            <div class="content-block">
                <h2>Сроки подачи документов</h2>
                <ul>
                    <li>Осенний семестр: до 15 сентября</li>
                    <li>Весенний семестр: до 15 февраля</li>
                </ul>
            </div>

            <div class="content-block">
                <h2>Необходимые документы</h2>
                <ol>
                    <li>Заявление установленного образца</li>
                    <li>Копия зачетной книжки</li>
                    <li>Справка о доходах семьи (для социальной стипендии)</li>
                    <li>Ходатайство от деканата</li>
                </ol>
            </div>

            <blockquote>
                "Внимание! Неполный пакет документов не рассматривается."
            </blockquote>

            <p class="highlight">После подачи документов решение принимается в течение 10 рабочих дней.</p>

            <div class="content-block">
                <h2>График работы приемной комиссии</h2>
                <table>
                    <tr>
                        <th>День недели</th>
                        <th>Время работы</th>
                    </tr>
                    <tr>
                        <td>Понедельник-пятница</td>
                        <td>10:00-16:00</td>
                    </tr>
                    <tr>
                        <td>Суббота</td>
                        <td>10:00-14:00</td>
                    </tr>
                    <tr>
                        <td>Воскресенье</td>
                        <td>Выходной</td>
                    </tr>
                </table>
            </div>

            <div style="text-align: center; margin: 30px 0;">
                <a href="financial-tips.html" class="btn">💡 Финансовые советы</a>
            </div>
        `,
        image: "OIP.webp",
        logoText: "ПОДАЧА ЗАЯВЛЕНИЯ"
    },
    tips: {
        title: "Финансовые советы для студентов",
        content: `
            <div class="post">
                <h2>Планирование бюджета</h2>
                <p>Эффективное управление личными финансами - ключ к успешной студенческой жизни.</p>
            </div>

            <div class="content-block">
                <h2>Основные правила финансового планирования</h2>
                <ul>
                    <li>Ведите учет доходов и расходов</li>
                    <li>Создайте финансовую подушку безопасности</li>
                    <li>Планируйте крупные покупки заранее</li>
                    <li>Используйте студенческие скидки и льготы</li>
                    <li>Избегайте импульсивных покупок</li>
                    <li>Ищите дополнительные источники дохода</li>
                </ul>
            </div>

            <blockquote>
                "Финансовая грамотность - это навык, который пригодится вам на всю жизнь."
            </blockquote>

            <div class="content-block">
                <h2>Месячный бюджет студента (пример)</h2>
                <table>
                    <tr>
                        <th>Статья расходов</th>
                        <th>Сумма (руб.)</th>
                    </tr>
                    <tr>
                        <td>Проживание (общежитие)</td>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <td>Питание</td>
                        <td>6000</td>
                    </tr>
                    <tr>
                        <td>Проезд</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Учебные материалы</td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>Связь и интернет</td>
                        <td>800</td>
                    </tr>
                    <tr>
                        <td>Личные расходы</td>
                        <td>1200</td>
                    </tr>
                    <tr>
                        <td><b>Итого расходы</b></td>
                        <td><b>15500</b></td>
                    </tr>
                </table>
            </div>

            <div class="content-block">
                <h2>Способы экономии</h2>
                <ol>
                    <li>Покупайте продукты оптом</li>
                    <li>Используйте студенческие скидки</li>
                    <li>Готовьте еду дома</li>
                    <li>Пользуйтесь библиотекой вместо покупки книг</li>
                    <li>Выбирайте бюджетный транспорт</li>
                </ol>
            </div>

            <div style="text-align: center; margin: 30px 0;">
                <a href="application.html" class="btn">📝 Подать заявление на стипендию</a>
            </div>
        `,
        image: "OIP.webp",
        logoText: "ФИНАНСОВЫЕ СОВЕТЫ"
    },
        calculator: {
        title: "Калькулятор стипендии",
        content: `
            <div class="calculator-form">
                <h2>Рассчитайте вашу возможную стипендию</h2>
                
                <div class="form-group">
                    <label for="scholarship-type">Тип стипендии:</label>
                    <select id="scholarship-type">
                        <option value="academic">Академическая</option>
                        <option value="social">Социальная</option>
                        <option value="special">Специальная</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="grades">Средний балл:</label>
                    <input type="number" id="grades" min="3.0" max="5.0" step="0.1" value="4.0">
                </div>

                <div class="form-group">
                    <label for="activities">Участие в активностях:</label>
                    <select id="activities">
                        <option value="none">Не участвую</option>
                        <option value="some">Участвую иногда</option>
                        <option value="active">Активно участвую</option>
                    </select>
                </div>

                <div style="text-align: center; margin: 25px 0;">
                    <button onclick="calculateScholarship()" class="btn">🧮 Рассчитать стипендию</button>
                </div>

                <div id="calculation-result" class="result-block">
                    <!-- Результат расчета появится здесь -->
                </div>
            </div>
        `,
        image: "OIP.webp",
        logoText: "КАЛЬКУЛЯТОР СТИПЕНДИИ"
    }
};

// Функция для сохранения данных в localStorage
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        console.log(`Данные сохранены в localStorage: ${key}`);
    } catch (error) {
        console.error('Ошибка сохранения в localStorage:', error);
    }
}

// Функция для загрузки данных из localStorage
function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Ошибка загрузки из localStorage:', error);
        return null;
    }
}

// Функция для работы с историей расчетов
function saveCalculationHistory(calculation) {
    const history = loadFromLocalStorage('scholarshipHistory') || [];
    calculation.timestamp = new Date().toLocaleString();
    history.unshift(calculation);
    
    // Сохраняем только последние 10 расчетов
    if (history.length > 10) {
        history.pop();
    }
    
    saveToLocalStorage('scholarshipHistory', history);
}

// Функция для отображения истории расчетов
function showCalculationHistory() {
    const history = loadFromLocalStorage('scholarshipHistory') || [];
    if (history.length === 0) {
        return '<p>История расчетов пуста</p>';
    }
    
    return `
        <div class="content-block">
            <h3>📊 История расчетов</h3>
            ${history.map(calc => `
                <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px; margin: 10px 0;">
                    <strong>${calc.timestamp}</strong><br>
                    Тип: ${getScholarshipTypeName(calc.type)} | 
                    Балл: ${calc.grades} | 
                    Итого: ${calc.total} руб.
                </div>
            `).join('')}
        </div>
    `;
}

// Вспомогательная функция для получения названия типа стипендии
function getScholarshipTypeName(type) {
    const types = {
        'academic': 'Академическая',
        'social': 'Социальная',
        'special': 'Специальная'
    };
    return types[type] || type;
}

// Улучшенная функция расчета стипендии с сохранением истории
function calculateScholarship() {
    const type = document.getElementById('scholarship-type').value;
    const grades = parseFloat(document.getElementById('grades').value);
    const activities = document.getElementById('activities').value;

    // Валидация ввода
    if (isNaN(grades) || grades < 3.0 || grades > 5.0) {
        alert('Пожалуйста, введите корректный средний балл (от 3.0 до 5.0)');
        return;
    }

    let baseAmount = 0;
    let typeName = '';
    
    switch(type) {
        case 'academic':
            baseAmount = 3000;
            typeName = 'Академическая';
            break;
        case 'social':
            baseAmount = 4500;
            typeName = 'Социальная';
            break;
        case 'special':
            baseAmount = 7500;
            typeName = 'Специальная';
            break;
    }

    // Бонус за оценки
    let gradeBonus = 0;
    let gradeComment = '';
    if (grades >= 4.8) {
        gradeBonus = 1000;
        gradeComment = 'Отличная успеваемость!';
    } else if (grades >= 4.5) {
        gradeBonus = 500;
        gradeComment = 'Хорошая успеваемость';
    } else {
        gradeComment = 'Старайтесь улучшить оценки';
    }

    // Бонус за активности
    let activityBonus = 0;
    let activityComment = '';
    if (activities === 'active') {
        activityBonus = 700;
        activityComment = 'Активное участие в жизни вуза';
    } else if (activities === 'some') {
        activityBonus = 300;
        activityComment = 'Умеренная активность';
    } else {
        activityComment = 'Рекомендуем участвовать в активностях';
    }

    const total = baseAmount + gradeBonus + activityBonus;

    // Сохраняем расчет в историю
    saveCalculationHistory({
        type: type,
        grades: grades,
        activities: activities,
        total: total
    });

    const resultDiv = document.getElementById('calculation-result');
    resultDiv.style.opacity = '0';
    resultDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div style="text-align: center;">
                <h3 style="color: #2d3436; margin-bottom: 20px;">🎉 Результат расчета:</h3>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px;">
                        <strong>Тип стипендии</strong><br>
                        ${typeName}
                    </div>
                    <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px;">
                        <strong>Базовая сумма</strong><br>${baseAmount} руб.
                    </div>
                    <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px;">
                        <strong>Бонус за оценки</strong><br>${gradeBonus} руб.<br>
                        <small>${gradeComment}</small>
                    </div>
                    <div style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 10px;">
                        <strong>Бонус за активности</strong><br>${activityBonus} руб.<br>
                        <small>${activityComment}</small>
                    </div>
                </div>
                
                <div style="background: linear-gradient(135deg, #ff6b6b, #ffa726); padding: 25px; border-radius: 15px; color: white; margin-bottom: 20px;">
                    <h2 style="margin: 0; font-size: 2em;">💰 ${total} руб./мес</h2>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">Примерный годовой доход: ${total * 10} руб.</p>
                </div>
                
                ${showCalculationHistory()}
                
                <div style="margin-top: 20px;">
                    <button onclick="shareCalculation()" class="btn" style="background: linear-gradient(135deg, #667eea, #764ba2);">
                        📤 Поделиться результатом
                    </button>
                    <button onclick="clearHistory()" class="btn" style="background: linear-gradient(135deg, #ff6b6b, #ee5a52); margin-left: 10px;">
                        🗑️ Очистить историю
                    </button>
                </div>
            </div>
        `;
        
        resultDiv.style.opacity = '1';
        resultDiv.style.transform = 'translateY(0)';
    }, 300);
}

// Функция для очистки истории
function clearHistory() {
    if (confirm('Вы уверены, что хотите очистить историю расчетов?')) {
        localStorage.removeItem('scholarshipHistory');
        const resultDiv = document.getElementById('calculation-result');
        if (resultDiv) {
            const historySection = resultDiv.querySelector('.content-block');
            if (historySection) {
                historySection.innerHTML = '<p>История расчетов очищена</p>';
            }
        }
    }
}

// Функция для имитации "поделиться"
function shareCalculation() {
    const type = document.getElementById('scholarship-type').value;
    const grades = document.getElementById('grades').value;
    const activities = document.getElementById('activities').value;
    
    const shareText = `Моя расчетная стипендия: ${document.querySelector('#calculation-result h2')?.textContent || '0 руб.'}\n` +
                     `Тип: ${getScholarshipTypeName(type)}\n` +
                     `Средний балл: ${grades}\n` +
                     `Активность: ${activities}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Расчет стипендии',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback для браузеров без поддержки Web Share API
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Результат скопирован в буфер обмена!');
        }).catch(() => {
            alert('Результат:\n' + shareText);
        });
    }
}

// Функция для генерации случайных данных (для демонстрации)
function generateRandomData() {
    const types = ['academic', 'social', 'special'];
    const activities = ['none', 'some', 'active'];
    
    return {
        type: types[Math.floor(Math.random() * types.length)],
        grades: (Math.random() * 2 + 3).toFixed(1),
        activities: activities[Math.floor(Math.random() * activities.length)]
    };
}

// Функция для заполнения формы случайными данными
function fillWithRandomData() {
    const randomData = generateRandomData();
    
    document.getElementById('scholarship-type').value = randomData.type;
    document.getElementById('grades').value = randomData.grades;
    document.getElementById('activities').value = randomData.activities;
}

// Добавляем кнопку случайных данных в калькулятор при загрузке
function addRandomDataButton() {
    const calculatorForm = document.querySelector('.calculator-form');
    if (calculatorForm && !document.getElementById('random-data-btn')) {
        const randomButton = document.createElement('button');
        randomButton.id = 'random-data-btn';
        randomButton.textContent = '🎲 Случайные данные';
        randomButton.className = 'btn';
        randomButton.style.background = 'linear-gradient(135deg, #a29bfe, #6c5ce7)';
        randomButton.style.marginLeft = '10px';
        randomButton.onclick = fillWithRandomData;
        
        const calculateButton = calculatorForm.querySelector('button[onclick="calculateScholarship()"]');
        if (calculateButton) {
            calculateButton.parentNode.appendChild(randomButton);
        }
    }
}

// Функция для инициализации калькулятора
function initCalculator() {
    addRandomDataButton();
    
    // Добавляем обработчики событий для реального времени
    const inputs = document.querySelectorAll('#scholarship-type, #grades, #activities');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            // Можно добавить превью расчета в реальном времени
            console.log('Данные формы изменены:', this.id, this.value);
        });
    });
}

// Улучшенная функция создания частиц
function createParticles() {
    // Удаляем старые частицы если есть
    const oldParticles = document.querySelector('.particles');
    if (oldParticles) {
        oldParticles.remove();
    }

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    const particleCount = window.innerWidth < 768 ? 8 : 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Случайные параметры
        const size = Math.random() * 20 + 5;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.top = `${top}vh`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Случайный цвет
        const colors = [
            'rgba(116, 185, 255, 0.3)',
            'rgba(255, 107, 107, 0.3)',
            'rgba(129, 236, 236, 0.3)',
            'rgba(255, 234, 167, 0.3)',
            'rgba(169, 223, 191, 0.3)',
            'rgba(250, 177, 160, 0.3)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// Функция для обработки изменения размера окна
function handleResize() {
    createParticles(); // Пересоздаем частицы при изменении размера
}

// Основная функция инициализации
function init() {
    createParticles();
    
    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', handleResize);
    
    // Проверяем, есть ли динамический контент (только на главной странице)
    if (document.getElementById('dynamic-content')) {
        showSection('general');
        
        // Добавляем анимацию для всех элементов при загрузке
        const animatedElements = document.querySelectorAll('.post, .content-block, table');
        animatedElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Инициализируем калькулятор если он есть на странице
    if (document.getElementById('scholarship-type')) {
        initCalculator();
    }
    
    // Добавляем обработчики для всех кнопок навигации
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Добавляем эффект пульсации при клике
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    console.log('🎓 Портал стипендий инициализирован!');
}

// Запускаем инициализацию когда DOM полностью загружен
document.addEventListener('DOMContentLoaded', init);

// Обработчик для страницы application.html
if (window.location.pathname.includes('application.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Страница подачи заявления загружена');
        // Можно добавить специфичную логику для этой страницы
    });
}

// Обработчик для страницы financial-tips.html
if (window.location.pathname.includes('financial-tips.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Страница финансовых советов загружена');
        // Можно добавить специфичную логику для этой страницы
    });
}

// Экспортируем функции для глобального использования
window.calculateScholarship = calculateScholarship;
window.showSection = showSection;
window.shareCalculation = shareCalculation;
window.clearHistory = clearHistory;
window.fillWithRandomData = fillWithRandomData;