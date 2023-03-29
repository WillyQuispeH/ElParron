export const _getCostPrices = `elect	max(tam.id) as tamano_id,
concat('Torta', ' ', '#', tam.num, case when pre.diet = 1 then ' Diet' else '' end, case when pre.cuadrada = 1 then ' Cuadrada' else '' end, case when pre.masaTipo_id = 4 then ' Panqueque' else '' end) as torta,
max(pre.costo) as costo,
max(pre.venta) as venta
from	app.precio pre inner join app.tamano tam on pre.tamano_id = tam.id
group 	by 
concat('Torta', ' ', '#', tam.num, case when pre.diet = 1 then ' Diet' else '' end, case when pre.cuadrada = 1 then ' Cuadrada' else '' end, case when pre.masaTipo_id = 4 then ' Panqueque' else '' end)
order	by
max(tam.id),
concat('Torta', ' ', '#', tam.num, case when pre.diet = 1 then ' Diet' else '' end, case when pre.cuadrada = 1 then ' Cuadrada' else '' end, case when pre.masaTipo_id = 4 then ' Panqueque' else '' end)`;

export const _getPublicPrices = `select	max(tam.id) as tamano_id,
concat('Torta', ' ', '#', tam.num, case when pre.diet = 1 then ' Diet' else '' end, case when pre.cuadrada = 1 then ' Cuadrada' else '' end, case when pre.masaTipo_id = 4 then ' Panqueque' else '' end) as torta,
max(pre.publico) as publico
from	app.precioPublico pre inner join app.tamano tam on pre.tamano_id = tam.id
group 	by 
concat('Torta', ' ', '#', tam.num, case when pre.diet = 1 then ' Diet' else '' end, case when pre.cuadrada = 1 then ' Cuadrada' else '' end, case when pre.masaTipo_id = 4 then ' Panqueque' else '' end)
order	by
max(tam.id),
concat('Torta', ' ', '#', tam.num, case when pre.diet = 1 then ' Diet' else '' end, case when pre.cuadrada = 1 then ' Cuadrada' else '' end, case when pre.masaTipo_id = 4 then ' Panqueque' else '' end)`;
