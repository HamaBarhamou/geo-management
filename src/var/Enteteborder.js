export const columns_Statistical_Overview = [
    {
      title: 'carId',
      dataIndex: 'carId',
      key: 'carId',
      width: 100,
    },
    {
      title: 'Machine Name',
      dataIndex: 'machineName',
      key: 'machineName',
      width: 200,
    },
    {
      title: 'Kilometrage (m)',
      dataIndex: 'mileage',
      key: 'mileage',
      width: 200,
    },
    {
      title: 'Compteur de survitesse',
      dataIndex: 'overSpeedCount',
      key: 'overSpeedCount',
      width: 200,
    },
    {
      title: 'Stay (Times)',
      dataIndex: 'stopCount',
      key: 'stopCount',
      width: 200,
    },
  ]
  export const columns_excesvitesse = [
    {
      title: 'Alarm',
      dataIndex: 'alarm',
      key: 'alarm',
      width: 100,
    },
    {
      title: 'Vitesse (km/h)',
      dataIndex: 'speed',
      key: 'vitesse',
      width: 100,
    },
    {
      title: 'Direction',
      dataIndex: 'dir',
      key: 'dir',
      width: 100,
    },
    {
      title: 'Heure du lieu',
      dataIndex: 'pointDt',
      key: 'pointDt',
      width: 200,
    },
    {
      title: 'Adresse',
      dataIndex: 'adresse',
      key: 'adresse',
      render: (data) => <a href={data}>{data}</a>,
      width: 100,
    },
    {
      title: 'Type Emplacement',
      dataIndex: 'pointType',
      key: 'pointType',
      width: 30,
    },
    {
      title: 'Deux distances de positionnements',
      dataIndex: 'signalMile',
      key: 'signalMile',
      width: 30,
    },
    {
      title: 'temps de repos en seconde',
      dataIndex: 'stopTime',
      key: 'stopTime',
      width: 30,
    },
    {
      title: 'Remarque',
      dataIndex: 'remark',
      key: 'remark',
      width: 200,
    },
   
  ];

  export const columns_parking_detail = [
    {
      title: 'Heure de début',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 200,
    },
    {
      title: 'Heure de fin',
      dataIndex: 'endTime',
      key: 'endTime',
      width: 200,
    },
    {
      title: 'Heure statique',
      dataIndex: 'heurestatique',
      key: 'heurestatique',
      width: 100,
    },
    {
      title: 'Stop Time',
      dataIndex: 'stopTime',
      key: 'stopTime',
      width: 100,
    },
    {
      title: 'Adresse',
      dataIndex: 'adresse',
      key: 'adresse',
      width: 200,
    },
  ]

  export const columns_mileage_detail = [
      {
        title: 'Day',
        dataIndex: 'day',
        key: 'day',
        width: 200,
      },
      {
        title: 'Kilometrage',
        dataIndex: 'mileage',
        key: 'mileage',
        width: 100,
      },
      {
        title: 'Survitesse (temps)',
        dataIndex: 'overSpeedCount',
        key: 'overSpeedCount',
        width: 100,
      },
      {
        title: 'Valeur de la survitesse (km/h)',
        dataIndex: 'overSpeedValue',
        key: 'overSpeedValue',
        width: 200,
      },
      {
        title: 'stop Count',
        dataIndex: 'stopCount',
        key: 'stopCount',
        width: 100,
      },
  ]
  export const columns_StaVoyage = [
    {
      title: 'Heure de début',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 200,
    },
    {
      title: 'Heure de fin',
      dataIndex: 'endTime',
      key: 'endTime',
      width: 200,
    },
    {
      title: 'kilométrage',
      dataIndex: 'mileage',
      key: 'mileage',
      width: 120,
    },
    {
      title: 'Vitesse moyenne',
      dataIndex: 'averageSpeed',
      key: 'averageSpeed',
      width: 100,
    },
    {
      title: 'Vitesse maximale',
      dataIndex: 'maxSpeed',
      key: 'maxSpeed',
      width: 100,
    },
    {
      title: 'Durée du voyage',
      dataIndex: 'travel',
      key: 'travel',
      width: 100,
    },
    
    {
      title: 'Lieu de départ',
      dataIndex: 'startLocation',
      key: 'startLocation',
      render: (data) => <a href={data}>{data}</a>,
      width: 200,
    },
    {
      title: 'Lieu d\'arriver',
      dataIndex: 'endLocation',
      key: 'endLocation',
      render: (data) => <a href={data}>{data}</a>,
      width: 200,
    },
  ]