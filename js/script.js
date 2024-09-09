document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content-container');
    const tool1Button = document.getElementById('tool1-btn');
    const tool2Button = document.getElementById('tool2-btn');
    const tool3Button = document.getElementById('tool3-btn');
    const homeButton = document.getElementById('home-btn');
    const header = document.getElementById('header').querySelector('h1');

    // Функция для отображения таблицы инструментов
    function displayTool1() {
        header.textContent = 'Автозаполнение счетчиков'; // Изменение заголовка
        contentContainer.innerHTML = `
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Производитель</th>
                        <th>Модель ПУ</th>
                        <th>Способ подключения</th>
                        <th>Модель модема</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><textarea id="manufacturer" readonly></textarea></td>
                        <td><textarea id="pu-model" placeholder="Введите модель ПУ"></textarea></td>
                        <td><textarea id="connection-method" readonly></textarea></td>
                        <td><textarea id="modem-model" readonly></textarea></td>
                    </tr>
                </tbody>
            </table>
        `;

        // Обработчик изменения в поле "Модель ПУ"
        document.getElementById('pu-model').addEventListener('input', function() {
            const modelPU = this.value.trim().split('\n'); // Разделение текста по строкам

            let manufacturerText = '';
            let connectionMethodText = '';
            let modemModelText = '';

            modelPU.forEach(model => {
                if ([
                    'ВСКМ-15В-И',
                    'ВСКМ-15-И',
                    'ВСКМ-15С-И',
                    'ВСКМ-15С',
                    'Vodomer ВСКМ-15В-И',
                    'VODOMER ВСКМ-15В-И',
                    'Vodomer ВСЦ-15',
                    'ВСКМ 15С-И',
                    'ВСКМ 16/40'
                    ].includes(model)) {
                    manufacturerText += 'VODOMER\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'ВСХНд 40', 
                    'ВСХН-15-02'
                    ].includes(model)) {
                    manufacturerText += 'ТЕПЛОВОДОМЕР\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'ВСКМ-15', 
                    'ВСКМ 90-25',
                    'ВСКМ 90-40',
                    'Декаст СТВУ(Ду 50, 65, 80, 100)'
                    ].includes(model)) {
                    manufacturerText += 'Декаст\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Пульс СВКМ-40УИ', 
                    'ПУЛЬС СВТ-50ХИ',
                    'ПУЛЬС-15У',
                    'Пульс СВУ-15',
                    'СВУ-15ВИ',
                    'ПУЛЬС СВТ-80ХИ',
                    'ПУЛЬС Универсальный',
                    'ПУЛЬС 15 УИ'
                    ].includes(model)) {
                    manufacturerText += 'ПУЛЬС\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'ВСХ-15-02', 
                    'ВСГ-15-02'
                    ].includes(model)) {
                    manufacturerText += 'ТЕПЛОВОДОМЕР\n';
                    connectionMethodText += '_\n';
                    modemModelText += 'Orionmeter ORN-TWN-LW868\n';
                } else if ([
                    'BAYLAN T50 r160', 
                    'BAYLAN KK-12',
                    'BAYLAN KK-10',
                    'BAYLAN TK-3C DN25 R160',
                    'BAYLAN TK-2 DN20 R160',
                    'BAYLAN TK-26 DN32 R160',
                    'BAYLAN TK-2C DN20 R160',
                    'Baylan W-6',
                    'BAYLAN',
                    'BAYLAN TK-5C DN40 R160',
                    'СВК-15ГМИ',
                    'T50 R160H'
                    ].includes(model)) {
                    manufacturerText += 'BAYLAN\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Gerrida w32 ги',
                    'GERRIDA СВК-15ГМИ',
                    'GERRIDA СВК-20ГИ'
                    ].includes(model)) {
                    manufacturerText += 'GERRIDA\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'CASCAD wm uw40', 
                    'CASCAD WM-UW 20',
                    'CASCAD WM-CW15',
                    'CASCAD WM-UW32',
                    'WM-CW15',
                    'CASCAD WM-UW15',
                    'CASCAD WM-CW32',
                    'CASCAD wm uw20',
                    'CASCAD WM-CW20',
                    'CASCAD WM-cw15'
                    ].includes(model)) {
                    manufacturerText += 'CASCAD\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'СВУ-15АИ', 
                    'СВХ-15АИ'
                    ].includes(model)) {
                    manufacturerText += 'Impulse plus\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Пульсар Ду-15',
                    'Пульсар Ду-15 ХВС',
                    'PULSAR',
                    'Пульсар Ду 15'
                    ].includes(model)) {
                    manufacturerText += 'Пульсар\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Zenner МTKD Ду 50', 
                    'Zenner ETKD Ду 15',
                    'Zenner MNK-RP-N Ду 15',
                    'Zenner MNK-RP-N Ду 32',
                    'Zenner MNK-RP-N Ду 25',
                    'Zenner MNK-RP-N Ду 40',
                    'Zenner WPD Ду 100',
                    'Zenner WPD Ду 80',
                    'Zenner-25,32,40',
                    'Zenner MNK-RP-N Ду 20',
                    'Zenner WPD Ду 50',
                    'Zenner WPD Ду 65',
                    'Zenner MNK-RP-N Ду 50',
                    'Zenner ETWD Ду 15',
                    'Zenner МTKD Ду 25',
                    'Zenner-20',
                    'Zenner WPH-ZF DN-50'
                    ].includes(model)) {
                    manufacturerText += 'ZENNER\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Sensus 420PC',
                    'Sensus-20 HRI-B1',
                    'sensus 15',
                    'Sensus-25,32,40',
                    'Sensus-25 HRI-B1',
                    'Sensus-32 HRI-B1',
                    'Sensus-50 HRI-Mei(B1/B4)'
                    ].includes(model)) {
                    manufacturerText += 'SENSUS\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'СГВ-15Д',
                    'БЕТАР СГВ-20д',
                    'СГВ-20МС'
                    ].includes(model)) {
                    manufacturerText += 'Бетар\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'ВСКМ-15 iwan'
                    ].includes(model)) {
                    manufacturerText += 'Декаст\n';
                    connectionMethodText += '_\n';
                    modemModelText += '_\n';
                } else if ([
                    'СВКМ-15УИ'
                    ].includes(model)) {
                    manufacturerText += 'НОРМА\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'ЭКОМЕРА-15И',
                    'Экомера - 32Х',
                    'Экомера - 20УИ',
                    'Экомера - 80ФИ',
                    'Экомера-15УИ',
                    'Экомера - 25У',
                    'Экомера-32УИ',
                    'Экомера - 40У',
                    'Экомера - 50ФИ'
                    ].includes(model)) {
                    manufacturerText += 'ЭКОМЕРА\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'EMHC-U I',
                    'Eco Meter EMHC-U I'
                    ].includes(model)) {
                    manufacturerText += 'Eco Meter\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'ЭКОНОМ СВ 15-110 ДГ',
                    'ЭКОНОМ СВ-ДМ 40 ДГ'
                    ].includes(model)) {
                    manufacturerText += 'ЭКОНОМ\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Casela CSLBC 15BM',
                    'Casela CSLBC-15CM-I'
                    ].includes(model)) {
                    manufacturerText += 'Casela\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'ITELMA_WFK2',
                    'ITELMA_WFW2'
                    ].includes(model)) {
                    manufacturerText += 'ITELMA\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Meta UM-15C'
                    ].includes(model)) {
                    manufacturerText += 'META\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'Wasseruhr-Etw15110'
                    ].includes(model)) {
                    manufacturerText += 'Wasseruhr\n';
                    connectionMethodText += 'Импульсный вход\n';
                    modemModelText += 'Orionmeter LA-IP\n';
                } else if ([
                    'СВ-15ВИ'
                    ].includes(model)) {
                    manufacturerText += 'Мастер\n';
                    connectionMethodText += '_\n';
                    modemModelText += '_\n';
                } else if ([
                    'Росконтроль Ду 32',
                    'Росконтроль ду 50',
                    'Росконтроль СВУ-40',
                    'Росконтроль СВУ-32',
                    'Мастер СВ-15ВИ Универсальный'
                    ].includes(model)) {
                    manufacturerText += 'Росконтроль\n';
                    connectionMethodText += '_\n';
                    modemModelText += '_\n';
                } else if ([
                    'CEM 32'
                    ].includes(model)) {
                    manufacturerText += '_\n';
                    connectionMethodText += '_\n';
                    modemModelText += '_\n';
                } else if ([
                    'OPTIMA ИРС-15'
                    ].includes(model)) {
                    manufacturerText += 'OPTIMA\n';
                    connectionMethodText += '_\n';
                    modemModelText += '_\n';
                } else if ([
                    'Миномесс М СВХ (D 25)',
                    'Миномесс М СВХД (D 32)',
                    'Миномесс СВХ'
                    ].includes(model)) {
                    manufacturerText += 'Minol\n';
                    connectionMethodText += '_\n';
                    modemModelText += '_\n';
                } else {
                    switch (model) {
                        default:
                            manufacturerText += '\n';
                            connectionMethodText += '\n';
                            modemModelText += '\n';
                            break;
                    }
                }
            });

            document.getElementById('manufacturer').value = manufacturerText.trimEnd();
            document.getElementById('connection-method').value = connectionMethodText.trimEnd();
            document.getElementById('modem-model').value = modemModelText.trimEnd();
        });
    }

    // Функция для отображения содержимого Инструмента 2
    function displayTool2() {
        header.textContent = 'Замена данных'; // Изменение заголовка
        contentContainer.innerHTML = `
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Результат</th>
                        <th>Учетный параметр/Counter</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><textarea id="manufacturer" readonly></textarea></td>
                        <td><textarea id="pu-model" placeholder="Введите данные"></textarea></td>
                    </tr>
                </tbody>
            </table>
        `;

        // Обработчик изменения в поле "Модель ПУ"
        document.getElementById('pu-model').addEventListener('input', function() {
            const modelPU = this.value.trim().split('\n'); // Разделение текста по строкам

            let manufacturerText = '';
            let connectionMethodText = '';
            let modemModelText = '';

            modelPU.forEach(model => {
                if ([
                    'Холодная вода 1'
                    ].includes(model)) {
                    manufacturerText += 'Холодная вода\n';
                } else if ([
                    'Горячая вода 1'
                    ].includes(model)) {
                    manufacturerText += 'Горячая вода\n';
                } else if ([
                    'Холодная вода 2'
                    ].includes(model)) {
                    manufacturerText += 'Холодная вода 1\n';
                } else if ([
                    'Горячая вода 2'
                    ].includes(model)) {
                    manufacturerText += 'Горячая вода 1\n';
                } else if ([
                    'COUNTER1', 
                    'counter1',
                    'Counter1'
                    ].includes(model)) {
                    manufacturerText += 'cnt1\n';
                } else if ([
                    'COUNTER2', 
                    'counter2',
                    'Counter2'
                    ].includes(model)) {
                    manufacturerText += 'cnt2\n';
                } else {
                    switch (model) {
                        default:
                            manufacturerText += '\n';
                            connectionMethodText += '\n';
                            modemModelText += '\n';
                            break;
                    }
                }
            });

            document.getElementById('manufacturer').value = manufacturerText.trimEnd();
        });
    }

    // Функция для отображения содержимого Инструмента 3
    function displayTool3() {
        header.textContent = 'Адаптирование показаний'; // Изменение заголовка
        contentContainer.innerHTML = `
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Результат</th>
                        <th>Имя счетчика</th>
                        <th>Начальное показание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><textarea class="result" readonly></textarea></td>
                        <td><textarea id="pu-models" placeholder="Введите имя счетчиков, каждый с новой строки"></textarea></td>
                        <td><textarea id="initial-readings" placeholder="Введите начальные показания, каждое с новой строки"></textarea></td>
                    </tr>
                </tbody>
            </table>
        `;
    
        // Обработчик изменения в поле "Имя счетчика" и "Начальное показание"
        document.getElementById('pu-models').addEventListener('input', calculateResults);
        document.getElementById('initial-readings').addEventListener('input', calculateResults);
    
        function calculateResults() {
            const models = document.getElementById('pu-models').value.trim().split('\n');
            const readings = document.getElementById('initial-readings').value.trim().split('\n');
            const results = [];
    
            const modelsToDivideBy1000 = ['ВСХ-15-02', 'ВСГ-15-02', 'ВСХНд 40', 'Vodomer ВСЦ-15', 'Пульсар Ду-15', 'EMHC-U I', 'ЭКОНОМ СВ 15-110 ДГ', 'Sensus-20 HRI-B1', 'ITELMA_WFK2', 'DHC-R-I', 'ПУЛЬС 15 УИ', 'ВСХН-15-02'];
            const modelsToDivideBy100 = ['Пульс СВУ-15', 'BAYLAN KK-10', 'VODOMER ВСКМ-15В-И', 'VODOMER ВСКМ-15С-И', 'ВСКМ-15С-И', 'ВСКМ-15С', 'ВСКМ-15', 'Casela CSLBC 15BM', 'CASCAD wm uw20', 'ЭКОМЕРА-15И', 'СВКМ-15УИ', 'ПУЛЬС-15У', 'BAYLAN TK-3C DN25 R160', 'BAYLAN TK-2 DN20 R160', 'СВК-15ГМИ', 'СВУ-15АИ', 'ВСКМ 90-25', 'Декаст ОСВХ-25', 'Пульсар Ду-15', 'Meta UM-15C', 'СВХ-15АИ', 'Росконтроль Ду 32', 'ВСКМ 15С-И', 'ВСКМ-15В-И', 'CASCAD WM-UW15', 'Vodomer ВСКМ-15В-И', 'Zenner МTKD Ду 50', 'Пульсар Ду 15', 'CASCAD WM-UW 20', 'CASCAD WM-CW20', 'СГВ-20МС', 'Zenner МTKD Ду 25', 'Zenner MNK-RP-N Ду 15','CASCAD WM-CW15', 'CASCAD WM-cw15'];
            const modelsToDivideBy100NoPoint = ['CASCAD wm uw40', 'CASCAD WM-UW 25', 'CASCAD WM-CW32', 'CASCAD WM-UW 50', 'Экомера - 32Х', 'BAYLAN T50 r160', 'BAYLAN KK-12', 'Gerrida w32 ги', 'Zenner WPD Ду 65'];
            const modelsToDivideBy10 = [ 'Zenner MNK-RP-N Ду 40', 'Zenner ETWD Ду 15', 'Zenner WPD Ду 100', 'Zenner MNK-RP-N Ду 25', 'Zenner MNK-RP-N Ду 20', 'Zenner WPD Ду 50', 'Zenner WPD Ду 80'];
            const modelsToDivideBy10Point2 = ['Zenner ETKD Ду 15'];
            const modelsToDivideBy10NoPoint = ['Zenner MNK-RP-N Ду 32'];
            const modelsNoDivision = ['Экомера - 25У', 'ПУЛЬС СВТ-50ХИ', 'ВСКМ-15 iwan', 'Росконтроль ду 50'];
            const modelsAnything = ['Pause'];
            const modelsCheck = ['Zenner MTW 32', 'Zenner MTKD (DN50)'];
    
            for (let i = 0; i < models.length; i++) {
                const modelPU = models[i].trim();
                const initialReading = parseFloat(readings[i].trim());
    
                if (!isNaN(initialReading)) {
                    if (modelsToDivideBy1000.includes(modelPU)) {
                        let result = initialReading >= 1 ? (initialReading / 1000).toFixed(3) : initialReading.toFixed(6).slice(0, 5);
                        results.push(result);
                    } else if (modelsToDivideBy100.includes(modelPU)) {
                        let result = (initialReading / 100).toFixed(6).slice(0, 5);
                        results.push(result);
                    } else if (modelsToDivideBy100NoPoint.includes(modelPU)) {
                        let result = (initialReading / 10);
                        results.push(result);
                    } else if (modelsToDivideBy10.includes(modelPU)) {
                        let result = (initialReading / 10).toFixed(6).slice(0, 5);
                        results.push(result);
                    } else if (modelsToDivideBy10Point2.includes(modelPU)) {
                        let result = (initialReading / 10).toFixed(2);
                        results.push(result);
                    } else if (modelsToDivideBy10NoPoint.includes(modelPU)) {
                        let result = (initialReading / 10);
                        results.push(result);
                    } else if (modelsNoDivision.includes(modelPU)) {
                        results.push(initialReading);
                    } else if (modelsAnything.includes(modelPU)) {
                        let result = (initialReading / 100).toFixed(3);
                        results.push(result);
                    } else if (modelsCheck.includes(modelPU)) {
                        let result = (initialReading / 1);
                        results.push(result + " Проверь фотку");
                    } else {
                        results.push('Неверная модель');
                    }
                } else {
                    results.push('Ошибка');
                }
            }
    
            document.querySelector('.result').value = results.join('\n');
        }
    }                                 

    // Функция для возврата на главную страницу
    function goHome() {
        window.location.href = 'http://10.10.12.247'; // Перенаправление на главную страницу
    }

    // Обработчики кликов по кнопкам
    tool1Button.addEventListener('click', displayTool1);
    tool2Button.addEventListener('click', displayTool2);
    tool3Button.addEventListener('click', displayTool3);
    homeButton.addEventListener('click', goHome);
});
