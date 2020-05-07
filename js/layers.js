/**
 * define all layers
 */
var boundary_admin_2_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_2',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_3_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_3',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_4_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_4',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_5_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_5',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_6_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_6',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_7_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_7',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_8_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_8',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_9_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_9',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var boundary_admin_10_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:boundaries_admin_10',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_huge_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_huge_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_primary_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_primary_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_secondary_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_secondary_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_small_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_small_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_tertiary_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_tertiary_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var highway_path_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:highway_path_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

var railway_lines = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:railway_lines',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		}
	})
});

// // Points
var shop_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:shop_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var public_transport_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:public_transport_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var natural_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:natural_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var aeroway_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:aeroway_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var craft_points = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:craft_points',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

// // Polygons
var building_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:building_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var natural_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:natural_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var military_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:military_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var waterway_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:waterway_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var geological_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:geological_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var aeroway_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:aeroway_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var emergency_polygons = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:emergency_polygons',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var landuse_brown = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_brown',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_commercialetc = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_commercialetc',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_freegreenandwood = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_freegreenandwood',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_gardeningandfarm = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_gardeningandfarm',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_grey = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_grey',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_industrial = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_industrial',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_military = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_military',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_residentialetc = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_residentaletc',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_transport = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_transport',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_water = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_water',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

// Polygon-Label

var building_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:building_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var natural_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:natural_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var military_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:military_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var waterway_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:waterway_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var geological_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:geological_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var aeroway_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:aeroway_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var emergency_polygons_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:emergency_polygons_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

var landuse_brown_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_brown_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_commercialetc_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_commercialetc_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_freegreenandwood_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_freegreenandwood_label_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_gardeningandfarm_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_gardeningandfarm_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_grey_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_grey_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_industrial_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_industrial_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_military_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_military_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_residentialetc_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_residentaletc_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_transport_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_transport_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});
var landuse_water_label = new ol.layer.Tile({
	source : new ol.source.TileWMS({
		url : 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms',
		params : {
			'LAYERS' : 'ohdm_t:landuse_water_label',
			'format' : 'image/png',
			'cql_filter' : cqlTimeFilter
		},
		serverType : 'geoserver'
	})
});

/**
 * layers into layer-group
 */
var layers = new ol.layer.Group({
	layers : [ natural_polygons, military_polygons, waterway_polygons,
			geological_polygons, aeroway_polygons, emergency_polygons,

			landuse_brown, landuse_commercialetc, landuse_freegreenandwood,
			landuse_gardeningandfarm, landuse_grey, landuse_industrial,
			landuse_military, landuse_residentialetc, landuse_transport,
			landuse_water,

			building_polygons,

			highway_path_lines, highway_small_lines, highway_tertiary_lines,
			highway_huge_lines, highway_secondary_lines, highway_primary_lines,
			railway_lines,

			boundary_admin_2_lines,
			// boundary_admin_3_lines,
			boundary_admin_4_lines,
			// boundary_admin_5_lines,
			boundary_admin_6_lines,
			// boundary_admin_7_lines,
			// boundary_admin_8_lines,
			boundary_admin_9_lines,
			// boundary_admin_10_lines,

			natural_polygons_label, military_polygons_label,
			waterway_polygons_label, geological_polygons_label,
			aeroway_polygons_label, emergency_polygons_label,

			landuse_brown_label, landuse_commercialetc_label,
			landuse_freegreenandwood_label, landuse_gardeningandfarm_label,
			// landuse_grey,
			landuse_industrial_label, landuse_military_label,
			landuse_residentialetc_label, landuse_transport_label,
			landuse_water_label,

			building_polygons_label ]
});

