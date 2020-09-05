var xdata = {
	"tree" : {
		"nodeName" : "NODE NAME 1",
		"name" : "NODE NAME 1",
		"type" : "type3",
		"code" : "N1",
		"label" : "Node name 1",
		"version" : "v1.0",
		"link" : {
				"name" : "Link NODE NAME 1",
				"nodeName" : "NODE NAME 1",
				"direction" : "ASYN"
			},
		"children" : [{
				"nodeName" : "NODE NAME 2.1",
				"name" : "NODE NAME 2.1",
				"type" : "type1",
				"code" : "N2.1",
				"label" : "Node name 2.1",
				"version" : "v1.0",
				"link" : {
						"name" : "Link node 1 to 2.1",
						"nodeName" : "NODE NAME 2.1",
						"direction" : "SYNC"
					},
				"children" : [{
						"nodeName" : "NODE NAME 3.1",
						"name" : "NODE NAME 3.1",
						"type" : "type2",
						"code" : "N3.1",
						"label" : "Node name 3.1",
						"version" : "v1.0",
						"link" : {
								"name" : "Link node 2.1 to 3.1",
								"nodeName" : "NODE NAME 3.1",
								"direction" : "SYNC"
							},
						"children" : []
					}, {
						"nodeName" : "NODE NAME 3.2",
						"name" : "NODE NAME 3.2",
						"type" : "type2",
						"code" : "N3.2",
						"label" : "Node name 3.2",
						"version" : "v1.0",
						"link" : {
								"name" : "Link node 2.1 to 3.2",
								"nodeName" : "NODE NAME 3.1",
								"direction" : "SYNC"
							},
						"children" : []
					}
				]
			}, {
				"nodeName" : "NODE NAME 2.2",
				"name" : "NODE NAME 2.2",
				"type" : "type1",
				"code" : "N2.2",
				"label" : "Node name 2.2",
				"version" : "v1.0",
				"link" : {
						"name" : "Link node 1 to 2.2",
						"nodeName" : "NODE NAME 2.2",
						"direction" : "ASYN"
					},
				"children" : []
			}, {
				"nodeName" : "NODE NAME 2.3",
				"name" : "NODE NAME 2.3",
				"type" : "type1",
				"code" : "N2.3",
				"label" : "Node name 2.3",
				"version" : "v1.0",
				"link" : {
						"name" : "Link node 1 to 2.3",
						"nodeName" : "NODE NAME 2.3",
						"direction" : "ASYN"
					},
				"children" : [{
						"nodeName" : "NODE NAME 3.3",
						"name" : "NODE NAME 3.3",
						"type" : "type1",
						"code" : "N3.3",
						"label" : "Node name 3.3",
						"version" : "v1.0",
						"link" : {
								"name" : "Link node 2.3 to 3.3",
								"nodeName" : "NODE NAME 3.3",
								"direction" : "ASYN"
							},
						"children" : [{
								"nodeName" : "NODE NAME 4.1",
								"name" : "NODE NAME 4.1",
								"type" : "type4",
								"code" : "N4.1",
								"label" : "Node name 4.1",
								"version" : "v1.0",
								"link" : {
										"name" : "Link node 3.3 to 4.1",
										"nodeName" : "NODE NAME 4.1",
										"direction" : "SYNC"
									},
								"children" : []
							}
						]
					}, {
						"nodeName" : "NODE NAME 3.4",
						"name" : "NODE NAME 3.4",
						"type" : "type1",
						"code" : "N3.4",
						"label" : "Node name 3.4",
						"version" : "v1.0",
						"link" : {
								"name" : "Link node 2.3 to 3.4",
								"nodeName" : "NODE NAME 3.4",
								"direction" : "ASYN"
							},
						"children" : [{
								"nodeName" : "NODE NAME 4.2",
								"name" : "NODE NAME 4.2",
								"type" : "type4",
								"code" : "N4.2",
								"label" : "Node name 4.2",
								"version" : "v1.0",
								"link" : {
										"name" : "Link node 3.4 to 4.2",
										"nodeName" : "NODE NAME 4.1",
										"direction" : "ASYN"
									},
								"children" : []
							}
						]
					}
				]
			}
		]
	}
}