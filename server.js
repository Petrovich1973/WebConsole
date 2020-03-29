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
                            field1: {label: 'label field', value: '', unit: 'sm'},
                            field2: {label: 'label2 field', value: '', unit: 'sm'},
                            field3: {label: 'label3 field', value: '', unit: 'sm'}
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
                            field1: {label: 'label field', value: '', unit: 'гр'},
                            field2: {label: 'label2 field', value: '', unit: 'гр'},
                            field3: {label: 'label3 field', value: '', unit: 'гр'},
                            field4: {label: 'label2 field4', value: '', unit: 'гр'},
                            field5: {label: 'label3 field5', value: '', unit: 'гр'}
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
                            field1: {label: 'label field', value: '', unit: 'гр'},
                            field2: {label: 'label2 field', value: '', unit: 'гр'},
                            field3: {label: 'label3 field', value: '', unit: 'гр'},
                            field4: {label: 'label2 field4', value: '', unit: 'гр'},
                            field5: {label: 'label3 field5', value: '', unit: 'гр'},
                            field6: {label: 'label3 field', value: '', unit: 'гр'},
                            field7: {label: 'label2 field4', value: '', unit: 'гр'},
                            field8: {label: 'label3 field5', value: '', unit: 'гр'}
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
                            field1: {label: 'label field', value: '2399', unit: 'гр'},
                            field2: {label: 'label2 field', value: '', unit: 'гр'},
                            field3: {label: 'label3 field', value: '', unit: 'гр'}
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
                            field1: {label: 'label field', value: '', unit: 'гр'},
                            field2: {label: 'label2 field', value: '', unit: 'гр'},
                            field3: {label: 'label3 field', value: '', unit: 'гр'}
                        }
                    },
                    group2: {
                        label: 'Размер плаценты',
                        fields: {
                            field1: {label: 'label field', value: '', unit: 'sm'},
                            field2: {label: 'label2 field', value: '', unit: 'sm'},
                            field3: {label: 'label3 field', value: '', unit: 'sm'}
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
    res.send({...req.body})
})

app.post('/api/data', (req, res) => {
    res.send({result: 0, message: 'message'})
})

app.listen(5000, () => console.log('Listening on port 5000! http://localhost:5000'))
