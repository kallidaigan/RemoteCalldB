-- Active: 1681993558280@@127.0.0.1@3306
INSERT into locality ("LocalityName", "NearestClinic", "NearestAirStrip","NASDistanceInKm", "NearestNightAirStrip", "NNASDistanceInKm", "NearestHospital", "DistanceByRoadInKm", "Notes") VALUES
    ('Imanpa', 'Imanpa', 'Erldunda', '52', 'Curtain Springs', '134', 'Alice Springs Hospital', '270', 'Population varies 50 to 120'),
    ('Erldunda', 'Imanpa', 'Erldunda', '52', 'Alice Springs', '210', 'Alice Springs Hospital', '220', 'Population varies 15 to 30'),
    ('Yulara', 'Yulara', 'Yulara', '10', 'Yulara', '10', 'Alice Springs Hospital', '480', 'Population varies 3000 to 6000');

INSERT INTO client ("PhoneNumber", "FirstName", "LastName", "HouseNumber", "Locality", "Notes", "Updated", "LocalityID") VALUES
    ('0417654234', 'Jack', 'Smith', '2', 'Imanpa', 'Often in hospital', '2023-04-18:17.50', 1),
    ('0417630954', 'Sam', 'Jones', '32', 'Imanpa', 'Her carer is Judy Malborough', '2023-04-18:17.50', 1),
    ('0498782234', 'Jill', 'Hayes', '12', 'Imanpa', 'Lives in large household', '2023-04-18:17.50', 1),
    ('0498312734', 'Mather', 'Swan', '129', 'Imanpa', 'DOV in place', '2023-04-18:17.50', 1),
    ('0498282734', 'Sue', 'Ross', '129', 'Imanpa', 'Cares for brother', '2023-04-18:17.50', 1),
    ('0498136734', 'Jackson', 'Ross', '129', 'Imanpa', 'Major illness', '2023-04-18:17.50', 1),
    ('0498346734', 'Jim', 'Hayes', '12', 'Imanpa', 'On Imanpa Council board', '2023-04-18:17.50', 1),
    ('0428136734', 'Sid', 'Ross', '129', 'Imanpa', 'Works at the clinic', '2023-04-18:17.50', 1),
    ('0414136234', 'John', 'Kunoth', '129', 'Imanpa', 'Lives mostly in Mutitjulu', '2023-04-18:17.50', 1),
    ('0487134234', 'Anne', 'Liddle', '31', 'Erldunda', 'Grandmother', '2023-04-18:17.50', 2),
    ('0487374234', 'Annabel', 'Liddle', '31', 'Erldunda', 'Cares for Jason Diddal', '2023-04-18:17.50', 2),
    ('0487512234', 'Jason', 'Diddal', '31', 'Erldunda', 'Lives with Aunty and Uncle', '2023-04-18:17.50', 2);

INSERT INTO client ("PhoneNumber", "FirstName", "LastName", "HouseNumber", "Locality", "Notes", "Updated", "LocalityID") VALUES
    ('0492765982', 'Judy', 'Malborough', '4', 'Imanpa', 'She is often in Alice Springs', '2023-04-18:19.50', 1);


Insert into call ("PhoneNumber", "ClientID", "CallDate", "Duration", "Locality", "Notes", "CallOrigin", "LocalityID") VALUES
    ('0417654234', '1', '2023-04-18:02.30', '620', 'Imanpa', 'His sister called', '000', 1);

Insert into clinic ("ClinicName", "Email", "FirstOnCallPhoneNumber", "SecondOnCallPhoneNumber", "ClinicManagerMobileNumber", "Locality", "PhoneNumber", "LocalityID") VALUES
    ('Imanpa Clinic', 'clinicmanager.imanpa@caac.org.au', '0434554234', '0417987654', '0419364234', 'Imanpa', '08 8956 0987', 1),
    ('Yulara Clinic', 'clinicmanager.yulara@caac.org.au', '0417645327', '0434662234', '0449888432', 'Yulara', '08 8957 8735', 3);