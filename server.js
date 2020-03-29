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
                    group1: {
                        label: 'Легкие',
                        fields: {
                            field1: {label: 'label field', value: '', unit: 'гр'},
                            field2: {label: 'label2 field', value: '', unit: 'гр'},
                            field3: {label: 'label3 field', value: '', unit: 'гр'}
                        }
                    },
                    group2: {
                        label: 'Сердце',
                        fields: {
                            field4: {label: 'label field', value: '', unit: 'sm'},
                            field5: {label: 'label2 field', value: '', unit: 'sm'},
                            field6: {label: 'label3 field', value: '', unit: 'sm'}
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
                        label: '',
                        fields: {
                            field7: {label: 'label field', value: '', unit: 'гр'},
                            field8: {label: 'label2 field', value: '', unit: 'гр'},
                            field9: {label: 'label3 field', value: '', unit: 'гр'},
                            field10: {label: 'label2 field4', value: '', unit: 'гр'},
                            field11: {label: 'label3 field5', value: '', unit: 'гр'}
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
                        label: '',
                        fields: {
                            field12: {label: 'label field', value: '', unit: 'гр'},
                            field13: {label: 'label2 field', value: '', unit: 'гр'},
                            field14: {label: 'label3 field', value: '', unit: 'гр'},
                            field15: {label: 'label2 field4', value: '', unit: 'гр'},
                            field16: {label: 'label3 field5', value: '', unit: 'гр'},
                            field17: {label: 'label3 field', value: '', unit: 'гр'},
                            field18: {label: 'label2 field4', value: '', unit: 'гр'},
                            field19: {label: 'label3 field5', value: '', unit: 'гр'}
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
                        label: '',
                        fields: {
                            field20: {label: 'label field', value: '2399', unit: 'гр'},
                            field21: {label: 'label2 field', value: '', unit: 'гр'},
                            field22: {label: 'label3 field', value: '', unit: 'гр'}
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
                        label: '',
                        fields: {
                            field23: {label: 'label field', value: '', unit: 'гр'},
                            field24: {label: 'label2 field', value: '', unit: 'гр'},
                            field25: {label: 'label3 field', value: '', unit: 'гр'}
                        }
                    },
                    group2: {
                        label: 'Размер плаценты',
                        fields: {
                            field26: {label: 'label field', value: '', unit: 'sm'},
                            field27: {label: 'label2 field', value: '', unit: 'sm'},
                            field28: {label: 'label3 field', value: '', unit: 'sm'}
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
    // res.send({...req.body})
    // Эмуляция задержки респонса
    setTimeout(() => res.send({...req.body}), 1000)
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
