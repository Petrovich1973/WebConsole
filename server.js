const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const config = {
    column1: {
        blocks: {
            block1: {
                style: {
                    color: 'black',
                    background: '#f4f5c6'
                },
                label: 'Анализ весов',
                groups: {
                    group0: {
                        label: null,
                        fields: {
                            name1: {label: "Тело", unit: "гр", value: ""},
                            name2: {label: "Мозг", unit: "гр", value: ""},
                            name3: {label: "Тимус", unit: "гр", value: ""},
                            name4: {label: "Печень", unit: "гр", value: ""},
                            name5: {label: "Селезенка", unit: "гр", value: ""},
                            name6: {label: "Надпочечники", unit: "гр", value: ""},
                            name7: {label: "Поджелудочная железа", unit: "гр", value: ""},
                            name8: {label: "Почки", unit: "гр", value: ""}
                        }
                    },
                    group1: {
                        label: 'Легкие',
                        fields: {
                            name9: {label: "Левое", unit: "гр", value: ""},
                            name10: {label: "Правое", unit: "гр", value: ""}
                        }
                    },
                    group2: {
                        label: 'Сердце',
                        fields: {
                            name11: {label: "Левое предсердие", unit: "гр", value: ""},
                            name12: {label: "Левый желудочек", unit: "гр", value: ""},
                            name13: {label: "Правое предсердие", unit: "гр", value: ""},
                            name14: {label: "Правый желудочек", unit: "гр", value: ""}
                        }
                    }
                }
            }
        }
    },
    column2: {
        blocks: {
            block2: {
                style: {
                    color: 'black',
                    background: '#c5bada'
                },
                label: 'Анализ длин',
                groups: {
                    group1: {
                        label: null,
                        fields: {
                            name15: {label: "CHL", unit: "мм", value: ""},
                            name16: {label: "CRL", unit: "мм", value: ""},
                            name17: {label: "HC", unit: "мм", value: ""},
                            name18: {label: "BPD", unit: "мм", value: ""},
                            name19: {label: "OCD", unit: "мм", value: ""},
                            name20: {label: "ICD", unit: "мм", value: ""},
                            name21: {label: "PL", unit: "мм", value: ""},
                            name22: {label: "CC", unit: "мм", value: ""},
                            name23: {label: "IND", unit: "мм", value: ""},
                            name24: {label: "AC", unit: "мм", value: ""},
                            name25: {label: "HL(левый)", unit: "мм", value: ""},
                            name26: {label: "HL(правый)", unit: "мм", value: ""},
                            name27: {label: "FL (левый)", unit: "мм", value: ""},
                            name28: {label: "FL (левый)", unit: "мм", value: ""}
                        }
                    }
                }
            }
        }
    },
    column3: {
        blocks: {
            block3: {
                style: {
                    color: 'black',
                    background: '#c4dfaf'
                },
                label: 'Радиографический анализ',
                groups: {
                    group1: {
                        label: null,
                        fields: {
                            name29: {label: "Humerus (левая)", unit: "мм", value: ""},
                            name30: {label: "Humerus (правая)", unit: "мм", value: ""},
                            name31: {label: "Ulna (левая)", unit: "мм", value: ""},
                            name32: {label: "Ulna (правая)", unit: "мм", value: ""},
                            name33: {label: "Radius (левая)", unit: "мм", value: ""},
                            name34: {label: "Radius (правая)", unit: "мм", value: ""},
                            name35: {label: "Femur (левая)", unit: "мм", value: ""},
                            name36: {label: "Femur (правая)", unit: "мм", value: ""},
                            name37: {label: "Tibia (левая)", unit: "мм", value: ""},
                            name38: {label: "Tibia (правая)", unit: "мм", value: ""},
                            name39: {label: "Fibula (левая)", unit: "мм", value: ""},
                            name40: {label: "Fibula (правая)", unit: "мм", value: ""}
                        }
                    }
                }
            }
        }
    },
    column4: {
        blocks: {
            block4: {
                style: {
                    color: 'black',
                    background: '#caf1ee'
                },
                label: 'G-I анализ',
                groups: {
                    group1: {
                        label: null,
                        fields: {
                            name41: {label: "Тонский кишечник", unit: "см", value: ""},
                            name42: {label: "Толстый кишечник", unit: "см", value: ""}
                        }
                    }
                }
            },
            block5: {
                style: {
                    color: 'black',
                    background: '#f5d3d3'
                },
                label: 'Послед',
                groups: {
                    group1: {
                        label: null,
                        fields: {
                            name43: {label: "Пуповина", unit: "см", value: ""},
                            name44: {label: "Вес плаценты", unit: "гр", value: ""}
                        }
                    },
                    group2: {
                        label: 'Размер плаценты',
                        fields: {
                            name45: {label: "Диаметр 1", unit: "см", value: ""},
                            name46: {label: "Диаметр 2", unit: "см", value: ""},
                            name47: {label: "Толщина", unit: "см", value: ""}
                        }
                    }
                }
            }
        }
    }
}

app.use(cors())
app.use(bodyParser.json())

app.get('/api/config', (req, res) => {
    // res.send({...config})
    // Эмуляция задержки респонса
    setTimeout(() => res.send({...config}), 1000)
})

app.post('/api/config', (req, res) => {
    try {
        throw new Error('Уупс!')
        // res.send({...req.body})
        // Эмуляция задержки респонса
        setTimeout(() => res.send({...req.body}), 1000)
    } catch (err) {
        res.status(400).send(err)
    }

})

app.post('/api/data', (req, res) => {
    try {
        // res.send({result: 0, message: 'Результат обработки данных...'})
        // Эмуляция задержки респонса
        setTimeout(() => res.send({result: 0, message: `Результат обработки данных... (total fields ${Object.keys(req.body).length})`}), 3000)
    } catch (err) {
        res.status(400).send(err)
    }

})

app.listen(5000, () => console.log('Listening on port 5000! http://localhost:5000'))
