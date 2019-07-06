export default {
  name: 'The Centaurs',
  type: 'Solar System',
  g: 39.5,
  dt: 0.01,
  tol: 0.0005,
  maxDt: 0.1,
  minDt: 0.00001,
  distMax: 50,
  distMin: -50,
  rotatingReferenceFrame: 'Sun',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigo: {
    x: 83221101.56513624,
    y: -52002315.80013949,
    z: 51595937.75983344
  },
  massBeingModified: 'Sun',
  primary: 'Sun',
  maximumDistance: { name: 'Sun to Kuiper Belt', value: 55 },
  distanceStep: { name: 'Sun to Earth / 10', value: 0.1 },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Centaur_(minor_planet)',
  masses: [
    {
      name: 'Sun',
      x: -0.001228506018475035,
      y: 0.007529769679984808,
      z: -4.519849621722579e-5,
      vx: -0.0029762801996427303,
      vy: 5.174901682079139e-4,
      vz: 7.71455723235092e-5,
      trailVertices: 300
    },
    {
      name: 'Jupiter',
      x: -1.725509877776523,
      y: -5.037812020039069,
      z: 0.05949165646941734,
      vx: 2.57413471559349,
      vy: -0.7617225459658319,
      vz: -0.0544323438357962
    },
    {
      name: 'Saturn',
      x: 2.26247789995069,
      y: -9.791607214022736,
      z: 0.08019087165050483,
      vx: 1.8732684480568977,
      vy: 0.45240581460847074,
      vz: -0.08247594519597591
    },
    {
      name: 'Uranus',
      x: 16.89274493810209,
      y: 10.43780535354868,
      z: -0.1800812527134118,
      vx: -0.7656354203356049,
      vy: 1.1551360353285554,
      vz: 0.014240700477078809
    },
    {
      name: 'Neptune',
      x: 29.02613986104927,
      y: -7.300634115586426,
      z: -0.5185940806198779,
      vx: 0.27205861962753347,
      vy: 1.1186110213994829,
      vz: -0.02944037737803112
    },
    {
      name: 'Chiron',
      orbitalPeriod: 53,
      type: 'asteroid',
      x: 18.72534308330106,
      y: 0.4594555629397964,
      z: 1.065521546340884,
      vx: 0.07143091463267293,
      vy: 1.1408368738998578,
      vz: -0.11678060862612753
    },
    {
      name: 'Asbolus',
      orbitalPeriod: 77,
      type: 'asteroid',
      x: 4.033949891878749,
      y: 20.72417852927671,
      z: 6.411557384286739,
      vx: -0.8044693714610476,
      vy: 0.812845623409524,
      vz: 0.28360972453233013
    },
    {
      name: 'Bienor',
      orbitalPeriod: 68,
      type: 'asteroid',
      x: 6.342896972418538,
      y: 12.21961599712277,
      z: 5.190615325226985,
      vx: -1.6435427904635223,
      vy: 0.5216406149904588,
      vz: -0.05213357565987842
    },
    {
      name: 'Chariklo',
      orbitalPeriod: 64,
      type: 'asteroid',
      x: 5.483552908372026,
      y: -15.08162052879368,
      z: -1.258497143238418,
      vx: 1.4269419850240443,
      vy: 0.19066686894323467,
      vz: 0.5742122470287695
    },
    {
      name: '38P/Stephan\u2013Oterma',
      orbitalPeriod: 39,
      type: 'asteroid',
      x: -1.473069166174047,
      y: 1.368240972458926,
      z: 0.5714214270336836,
      vx: -5.245471450514219,
      vy: -2.1160768225343953,
      vz: 1.555268471779027
    },
    {
      name: 'Hylonome',
      orbitalPeriod: 128,
      type: 'asteroid',
      x: 4.693829877338169,
      y: -23.70869744330285,
      z: 1.706036713311614,
      vx: 1.2955187137512831,
      vy: -0.066952754252097,
      vz: 0.0018767125632482208
    },
    {
      name: 'Nessus',
      orbitalPeriod: 124,
      type: 'asteroid',
      x: 25.96034939671905,
      y: -10.1591114625977,
      z: -6.207897776753946,
      vx: 0.8537372390282294,
      vy: 0.653526659649303,
      vz: 0.03238829356794482
    },
    {
      name: 'Amycus',
      orbitalPeriod: 127,
      type: 'asteroid',
      x: 5.600530657522697,
      y: -20.27685464037974,
      z: -2.499971701660879,
      vx: 1.4397023509811344,
      vy: -0.189042233154246,
      vz: 0.2073302885113857
    },
    {
      name: 'Pholus',
      orbitalPeriod: 93,
      type: 'asteroid',
      x: 0.2368312598466348,
      y: -27.46631869161681,
      z: 6.092321579564652,
      vx: 0.7727263889119071,
      vy: -0.4760321344073345,
      vz: -0.20244522729794248
    },
    {
      name: 'Okyrhoe',
      orbitalPeriod: 24,
      type: 'asteroid',
      x: 8.676987756371403,
      y: -6.35741339754493,
      z: 1.476544458738926,
      vx: 1.0333100175075784,
      vy: 1.1613363139406723,
      vz: -0.357962357519824
    },
    {
      name: 'Damocles',
      orbitalPeriod: 41,
      type: 'asteroid',
      x: 15.32518703539241,
      y: -10.76849784073682,
      z: 6.536745375937859,
      vx: -0.42717370965789697,
      vy: 0.6324530125501632,
      vz: 0.250206631376573
    },
    {
      name: 'Crantor',
      orbitalPeriod: 86,
      type: 'asteroid',
      x: 12.8683756106439,
      y: -14.03118953369237,
      z: -1.125329028222062,
      vx: 1.2627190816367302,
      vy: 0.6398412023587767,
      vz: -0.32093961565622203
    },
    {
      name: '2005 RO43',
      orbitalPeriod: 93,
      type: 'asteroid',
      x: 3.548168725586727,
      y: 16.37819321604338,
      z: -10.29411860293829,
      vx: -1.545673383232246,
      vy: -0.510330377641874,
      vz: 0.001989841366603999
    },
    {
      name: 'Echeclus',
      orbitalPeriod: 35,
      type: 'asteroid',
      x: 3.398003127578456,
      y: 7.751296602238959,
      z: -0.6142858006365057,
      vx: -1.5826457576094233,
      vy: 1.7636954279239023,
      vz: -0.1189513029435472
    },
    {
      name: 'Thereus',
      orbitalPeriod: 35,
      type: 'asteroid',
      x: -7.952547922419576,
      y: 8.782817557903781,
      z: -4.204115693795586,
      vx: -1.1341719958718797,
      vy: -1.1171363935863339,
      vz: 0.19559642803152033
    },
    {
      name: '2004 YH32',
      orbitalPeriod: 24,
      type: 'asteroid',
      x: -8.454106280560145,
      y: -9.224942187827137,
      z: 0.2271085735700706,
      vx: 0.3298174647878721,
      vy: 0.028892381388541357,
      vz: -1.1657933719528182
    },
    {
      name: 'Elatus',
      orbitalPeriod: 41,
      type: 'asteroid',
      x: -15.94371011850192,
      y: -3.014320352109324,
      z: 1.447877665533239,
      vx: 0.24906546741563115,
      vy: -1.1980485759180999,
      vz: -0.028424777132961175
    }
  ]
};
