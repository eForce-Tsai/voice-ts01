let i = 0
PlanetX_Basic.onASR(PlanetX_Basic.vocabularyList.Close_device, function () {
    i = 0
    PlanetX_Basic.motorFan(PlanetX_Basic.DigitalRJPin.J1, false)
})
PlanetX_Basic.onASR(PlanetX_Basic.vocabularyList.One_level_down, function () {
    if (i > 1) {
        i += -1
    }
})
PlanetX_Basic.onASR(PlanetX_Basic.vocabularyList.One_level_up, function () {
    if (i < 3) {
        i += 1
    }
})
PlanetX_Basic.onASR(PlanetX_Basic.vocabularyList.Open_device, function () {
    i = 1
})
basic.forever(function () {
    PlanetX_Basic.motorFan(PlanetX_Basic.DigitalRJPin.J1, true, i * 33)
})
