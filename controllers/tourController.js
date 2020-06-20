var Tour = require('../models/tourModel');
var catchAsyn = require('../utils/catchAsync');
var filtros = require('../utils/filtros');


exports.getTour = catchAsyn(async(req, res) => {

    var feature = new filtros(Tour.find(), req.query).filter().sort().fields().paginacion();

    var tour = await feature.query;
    res.status(200).json({
        ok: true,
        cantidad: tour.length,
        tours: tour
    })
})