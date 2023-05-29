-- Active: 1681993558280@@127.0.0.1@3306

CREATE TABLE locality(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    LocalityName TEXT,
    NearestClinic TEXT,
    NCDistanceInKm NUMBER,
    NearestAirStrip TEXT,
    NASDistanceInKm NUMBER,
    NearestNightAirStrip TEXT,
    NNASDistanceInKm NUMBER,
    NearestHospital TEXT,
    DistanceByRoadInKm NUMBER,
    Notes TEXT
);

CREATE TABLE client(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    PhoneNumber TEXT,
    FirstName TEXT,
    LastName TEXT,
    DateOfBirth DATE,
    LocalHealthID TEXT,
    HouseNumber TEXT,
    Locality TEXT,
    ClientAddress TEXT,
    Notes TEXT,
    Alert TEXT,
    Updated DATE,
    SessionID TEXT,
    LocalityID INTEGER,
    FOREIGN KEY (LocalityID) REFERENCES locality(id)
);
CREATE TABLE call(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    PhoneNumber TEXT,
    Locality TEXT,
    OtherLocality TEXT,
    ClientID INTEGER,
    TwilioID TEXT,
    CallDate DATE,
    Duration INTEGER,
    TalkDuration INTEGER,
    Supervised INTEGER,
    Notes TEXT,
    Outcome TEXT,
    CallOrigin TEXT,
    LocalityID INTEGER,
    FOREIGN KEY (ClientID) REFERENCES client(id),
    FOREIGN KEY (LocalityID) REFERENCES locality(id)
);

CREATE TABLE clinic(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    ClinicName TEXT NOT NULL,
    Locality TEXT NOT NULL,
    PhoneNumber TEXT,
    ClinicManagerMobileNumber TEXT,
    FirstOnCallPhoneNumber TEXT,
    SecondOnCallPhoneNumber TEXT,
    Email TEXT,
    Notes TEXT,
    LocalityID INTEGER NOT NULL,
    FOREIGN KEY (LocalityID) REFERENCES locality(id)
);