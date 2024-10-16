// Sample data for recordings
const recordings = [
    { date: "2003-10-13", city: "London", venue: "ICA", source: "Good (Audience)", length: 35, equipment: "AUD > FLAC" },
    { date: "2003-11-11", city: "Los Angeles", venue: "KCRW Studios", source: "Excellent (FM)", length: 30, equipment: "FM > FLAC" },
    { date: "2004-02-05", city: "London", venue: "Astoria", source: "Very Good (Audience)", length: 25, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-02-10", city: "Northampton", venue: "Soundhaus", source: "Excellent (Soundboard)", length: 50, equipment: "SBD > CDR > FLAC" },
    { date: "2004-02-05", city: "London", venue: "Villiers Theatre", source: "Very Good (Audience)", length: 50, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-02-12", city: "Sheffield", venue: "Sheffield University SU", source: "Very Good (Audience)", length: 20, equipment: "AUD > CDR > FLAC" },
    { date: "2004-02-26", city: "London", venue: "The Basement Club", source: "Very Good (Audience)", length: 50, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-03-03", city: "Birmingham", venue: "TC's", source: "Excellent (Soundboard)", length: 50, equipment: "SBD > Logic Pro X > FLAC" },
    { date: "2004-03-03", city: "Birmingham", venue: "TC's", source: "Good (Audience)", length: 50, equipment: "AUD > CDR > FLAC" },
    { date: "2004-03-09", city: "London", venue: "ULU", source: "Very Good (Audience)", length: 50, equipment: "AUD > CDR > FLAC" },
    { date: "2004-03-28", city: "London", venue: "Hammersmith Apollo", source: "Very Good (Audience)", length: 30, equipment: "AUD > CDR > FLAC" },
    { date: "2004-04-05", city: "London", venue: "Maida Vale Studios", source: "Excellent (FM)", length: 35, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-04-23", city: "Liverpool", venue: "Academy 4", source: "Very Good (Audience)", length: 60, equipment: "AUD > CDR > FLAC" },
    { date: "2004-04-24", city: "Leeds", venue: "Metropolitan University", source: "Very Good (Audience)", length: 60, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-04-28", city: "Newcastle", venue: "Newcastle University", source: "Excellent (Audience)", length: 60, equipment: "SP-CMC-8 > SP-SPSB-3 > JB3" },
    { date: "2004-05-08", city: "Eastbourne", venue: "Winter Gardens", source: "Very Good (Audience)", length: 60, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-05-09", city: "London", venue: "Virgin Megastore", source: "Very Good (Audience)", length: 60, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-05-10", city: "London", venue: "Forum Kentish Town", source: "Very Good (Audience)", length: 60, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-05-19", city: "Berlin", venue: "Columbia Fritz", source: "Excellent (FM)", length: 60, equipment: "FM > CDR > FLAC" },
    { date: "2004-06-01", city: "San Francisco", venue: "Cafe Du Nord", source: "Excellent (Audience)", length: 60, equipment: "Sonic Studio mics > Sony TCD-D100" },
    { date: "2004-06-02", city: "Los Angeles", venue: "KCRW Studios", source: "Excellent (FM)", length: 60, equipment: "FM > FLAC" },
    { date: "2004-06-24", city: "New York", venue: "WXRK Studios", source: "Excellent (FM)", length: 60, equipment: "FM > WAV > FLAC" },
    { date: "2004-06-26", city: "Pilton", venue: "Glastonbury Festival", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-07-04", city: "Herzogenrath", venue: "Eins Live Konigstreffen", source: "Excellent (FM)", length: 60, equipment: "FM > DAT > FLAC" },
    { date: "2004-07-11", city: "Punchestown", venue: "Oxegen Festival", source: "Poor (Audience)", length: 60, equipment: "MD > CDR > FLAC" },
    { date: "2004-07-16", city: "Arvika", venue: "Arvikafestivalen", source: "Excellent (FM)", length: 40, equipment: "Analogue Cable FM > WAV > FLAC" },
    { date: "2004-08-07", city: "Rees-Haldern", venue: "Haldern Pop-Festival", source: "Excellent (Audience)", length: 50, equipment: "DPA 4060 > MPS6020 > Sony TCD-D100" },
    { date: "2004-08-14", city: "Salzburg", venue: "Frequency Festival", source: "Excellent (FM)", length: 45, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-08-18", city: "Battle", venue: "Battle Memorial Hall", source: "Very Good (Audience)", length: 30, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2004-08-18", city: "Battle", venue: "Battle Memorial Hall", source: "Excellent (FM)", length: 40, equipment: "FM > CDR > FLAC" },
    { date: "2004-08-19", city: "Hasselt-Kiewit", venue: "Pukkelpop Festival", source: "Excellent (FM)", length: 55, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-08-20", city: "Biddinghuizen", venue: "Lowlands Festival", source: "Excellent (SBD)", length: 30, equipment: "SBD > CDR > FLAC" },
    { date: "2004-08-21", city: "Chelmsford", venue: "V Festival", source: "Excellent (FM)", length: 50, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-08-26", city: "Inverness", venue: "Up Close Festival", source: "Excellent (FM)", length: 45, equipment: "FM > CDR > FLAC" },
    { date: "2004-08-29", city: "Dublin", venue: "HMV", source: "Excellent (Audience)", length: 30, equipment: "AT831b > Sony MZ-G75" },
    { date: "2004-08-29", city: "Dublin", venue: "Olympia Theatre", source: "Excellent (Audience)", length: 35, equipment: "AT831b > Sony MZ-G755" },
    { date: "2004-09-08", city: "Portland", venue: "Berbati's Pan", source: "Excellent (Soundboard)", length: 50, equipment: "SBD > CDR > FLAC" },
    { date: "2004-09-11", city: "West Hollywood", venue: "Virgin Megastore", source: "Excellent (Audience)", length: 40, equipment: "Built-in Mics > Sony DCR-TRV22 > Master MiniDV" },
    { date: "2004-10-16", city: "Stuttgart", venue: "Villa Berg", source: "Excellent (FM)", length: 45, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-10-17", city: "Cologne", venue: "Live Music Hall", source: "Excellent (Audience)", length: 55, equipment: "Soundman OKM II Rock > A3 Adapter > Sony MZ-N910" },
    { date: "2004-11-08", city: "Nottingham", venue: "Rock City", source: "Excellent (Audience)", length: 40, equipment: "AUD > CDR > FLAC" },
    { date: "2004-11-16", city: "London", venue: "The Hub", source: "Excellent (FM)", length: 45, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-11-17", city: "London", venue: "Brixton Academy", source: "Excellent (FM)", length: 50, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-11-19", city: "Lyon", venue: "Hall Tony Garnier", source: "Excellent (FM)", length: 45, equipment: "Digital Satellite Receiver > CDR > FLAC" },
    { date: "2004-12-11", city: "Los Angeles", venue: "Gibson Amphitheater", source: "Excellent (Audience)", length: 55, equipment: "Sonic Studios DSM6s > PA-6LC > Sony D8 DAT" },
    { date: "2004-12-11", city: "Los Angeles", venue: "Gibson Amphitheater", source: "Excellent (FM)", length: 50, equipment: "FM > FLAC" },
    { date: "2005-02-17", city: "Chicago", venue: "Riviera Theater", source: "Excellent (FM)", length: 60, equipment: "FM > Onkyo TX8511 > SoundBlaster > FLAC" },
    { date: "2005-02-25", city: "Atlanta", venue: "99X", source: "Excellent (FM)", length: 45, equipment: "FM > CDR > FLAC" },
    { date: "2005-03-19", city: "Vienna", venue: "Gasometer", source: "Very Good (Audience)", length: 60, equipment: "AUD > CDR > FLAC" },
    { date: "2005-03-22", city: "Paris", venue: "L'Olympia", source: "Excellent (Audience)", length: 60, equipment: "AT831b > Sony MZ-G755" },
    { date: "2005-04-30", city: "Indio", venue: "Coachella Festival", source: "Excellent (Audience)", length: 60, equipment: "AT853 > Denecke PS-2 > Nomad JB3" },
    { date: "2005-05-09", city: "Seattle", venue: "Paramount Theatre", source: "Excellent (Audience)", length: 60, equipment: "AUD > FLAC" },
    { date: "2005-06-29", city: "London", venue: "Wireless Festival", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2005-07-03", city: "Werchter", venue: "Werchter Festival", source: "Excellent (FM)", length: 60, equipment: "Denon FM Tuner > FLAC" },
    { date: "2005-07-10", city: "Naas", venue: "Oxegen Festival", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2005-08-01", city: "Cornwall", venue: "Eden Project", source: "Very Good (Audience)", length: 60, equipment: "AUD > CDR > FLAC" },
    { date: "2005-08-01", city: "Cornwall", venue: "Eden Project", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2005-08-05", city: "Nice", venue: "Stade Charles-Ehrmann", source: "Very Good (Audience)", length: 60, equipment: "Sony ECM-719 > Sony MZ-NH900" },
    { date: "2005-09-23", city: "Austin", venue: "ACL Music Festival", source: "Very Good (Audience)", length: 60, equipment: "Sony MD RZ-70 > FLAC" },
    { date: "2006-05-14", city: "Dundee", venue: "Camperdown Park", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2006-05-16", city: "Cologne", venue: "Kulturkirche", source: "Excellent (FM)", length: 60, equipment: "FM > WAV > FLAC" },
    { date: "2006-05-17", city: "Berlin", venue: "Kesselhaus", source: "Excellent (FM)", length: 60, equipment: "FM > Sony DAT DTC-60ES w/ SBM > FLAC" },
    { date: "2006-05-23", city: "Paris", venue: "Le Trabendo", source: "Excellent (Audience)", length: 60, equipment: "Sony ECM-719 > Sony MZ-NH900" },
    { date: "2006-05-25", city: "Hilversum", venue: "3FM Studios", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2006-05-26", city: "Amsterdam", venue: "Paradiso", source: "Excellent (Audience)", length: 75, equipment: "MM-MCSM-4 cardioids > MM-EBM-1 > Nomad Jukebox 3" },
    { date: "2006-05-27", city: "Oslo", venue: "Sentrum Scene", source: "Excellent (Audience)", length: 60, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2006-06-04", city: "Nürburg", venue: "Rock am Ring", source: "Excellent (FM)", length: 60, equipment: "FM > CD Spin Doctor > FLAC" },
    { date: "2006-06-05", city: "Landgraaf", venue: "Pinkpop Festival", source: "Excellent (SBD)", length: 60, equipment: "SBD > CDR > FLAC" },
    { date: "2006-06-09", city: "London", venue: "Astoria", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2006-06-22", city: "Los Angeles", venue: "KCRW Studios", source: "Excellent (FM)", length: 60, equipment: "FM > CDR > FLAC" },
    { date: "2006-07-15", city: "Barcelona", venue: "Parc del Fòrum", source: "Excellent (Audience)", length: 60, equipment: "Sonic Studios DSM6s > PA-6LC > iRiver H-340" },
    { date: "2006-08-18", city: "Kiewit", venue: "Pukkelpop Festival", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2006-08-19", city: "Chelmsford", venue: "V Festival", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2006-11-07", city: "Rotterdam", venue: "Ahoy", source: "Good (Audience)", length: 60, equipment: "Panasonic NV-GS17 > MiniDV-M > FLAC" },
    { date: "2006-11-15", city: "Berlin", venue: "Tempodrom", source: "Excellent (Audience)", length: 60, equipment: "Soundman OKM II Rock > A3 Adapter > M-AUDIO Microtrack" },
    { date: "2007-01-23", city: "Paris", venue: "L'Olympia", source: "Excellent (FM)", length: 60, equipment: "FM > Stereo Receiver > FLAC" },
    { date: "2007-02-23", city: "Birmingham", venue: "NEC Arena", source: "Excellent (Audience)", length: 60, equipment: "SP-CMC-8 > SP-SPSB-7 > Sony MZ-RH10" },
    { date: "2007-03-08", city: "Edinburgh", venue: "Liquid Room", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2007-04-15", city: "Santiago", venue: "Club Hípico", source: "Excellent (Audience)", length: 60, equipment: "AUD > CDR > FLAC" },
    { date: "2007-06-10", city: "Newport", venue: "Isle of Wight Festival", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2007-06-30", city: "Werchter", venue: "Werchter Festival", source: "Excellent (FM)", length: 60, equipment: "Denon FM Tuner > FLAC" },
    { date: "2008-11-15", city: "London", venue: "Union Chapel", source: "Good (Audience)", length: 60, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2008-11-20", city: "Paris", venue: "Le Zénith", source: "Excellent (Audience)", length: 60, equipment: "SP-CMC-4 > SP-SPSB-1 > Edirol R-09" },
    { date: "2008-12-04", city: "Los Angeles", venue: "KCRW Studios", source: "Excellent (FM)", length: 60, equipment: "FM > Harman Kardon AVR30" },
    { date: "2008-12-16", city: "London", venue: "The Hub", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2008-12-16", city: "London", venue: "229 Club", source: "Excellent (FM)", length: 90, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
    { date: "2009-02-12", city: "London", venue: "O2 Arena", source: "Very Good (Audience)", length: 60, equipment: "Sony ECM-TS125 > Sharp IM-DR420H" },
    { date: "2009-04-24", city: "Koto", venue: "Studio Coast", source: "Excellent (Audience)", length: 60, equipment: "DPA mics > 9V battery > Sony PCM-D50" },
    { date: "2009-05-20", city: "Philadelphia", venue: "World Cafe Live", source: "Excellent (FM)", length: 60, equipment: "Pre-FM > FLAC" },
    { date: "2009-06-17", city: "Berlin", venue: "Kesselhaus", source: "Excellent (FM)", length: 60, equipment: "Pre-FM > CDR > FLAC" },
    { date: "2009-06-19", city: "Neuhausen ob Eck", venue: "Southside Festival", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
{ date: "2009-07-10", city: "Punchestown", venue: "Oxegen Festival", source: "Excellent (FM)", length: 60, equipment: "FM > Videoton RT7300 > Fostex FR2LE > FLAC" },
{ date: "2009-08-11", city: "Hong Kong", venue: "HITEC Star Hall", source: "Excellent (Audience)", length: 60, equipment: "Sony ECM-719 > Sony MZ-NH1" },
{ date: "2009-09-10", city: "Seattle", venue: "The Moore Theater", source: "Excellent (Audience)", length: 60, equipment: "AT853 > SP-SBSP-11 > iRiver iHP-120" },
{ date: "2010-05-12", city: "London", venue: "The Fridge", source: "Excellent (Audience)", length: 60, equipment: "Sony ECM-125 > Edirol R-09" },
{ date: "2010-05-15", city: "London", venue: "BBC Radio Theatre", source: "Excellent (FM)", length: 60, equipment: "FM > Sansui T60 > Sony MZ-RH1" },
{ date: "2010-06-15", city: "London", venue: "Roundhouse", source: "Very Good (Audience)", length: 60, equipment: "Built-in Mics > Zoom H2 > FLAC" },
{ date: "2010-06-27", city: "Pilton", venue: "Glastonbury Festival", source: "Excellent (Audience)", length: 60, equipment: "DPA 4061 > Edirol R-09" },
{ date: "2010-08-07", city: "Philadelphia", venue: "The Mann Center", source: "Very Good (Audience)", length: 60, equipment: "Built-in Mics > Edirol R-09" },
{ date: "2010-08-10", city: "New York", venue: "The Living Room", source: "Excellent (FM)", length: 60, equipment: "FM > FLAC" },
{ date: "2012-03-09", city: "Bexhill-on-Sea", venue: "De La Warr Pavilion", source: "Excellent (Audience)", length: 60, equipment: "Sony ECM-125 > Roland R-05" },
{ date: "2012-03-15", city: "Los Angeles", venue: "KCRW Studios", source: "Excellent (FM)", length: 60, equipment: "FM > Onkyo HT-R520 > Zoom H4n" },
{ date: "2012-05-09", city: "London", venue: "BBC Radio Theatre", source: "Excellent (FM)", length: 60, equipment: "FM > PCTV NanoStick T2 > FLAC" },
{ date: "2012-05-14", city: "Paris", venue: "Oui FM Studios", source: "Excellent (FM)", length: 15, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
{ date: "2012-06-02", city: "Nürburg", venue: "Rock am Ring", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
{ date: "2012-06-04", city: "Folkestone", venue: "Leas Cliff Hall", source: "Excellent (Audience)", length: 60, equipment: "Sony ECM-125 > Edirol R-09" },
{ date: "2012-09-03", city: "Vancouver", venue: "The Centre in Vancouver for Performing Arts", source: "Excellent (Audience)", length: 60, equipment: "SP-CMC-8 > SP-SPSB-7 battery box > Edirol R-09" },
{ date: "2012-10-15", city: "Offenbach", venue: "Capitol", source: "Excellent (Audience)", length: 60, equipment: "CA-14(c) > Ugly Battery Box > Sony PCM-M10" },
{ date: "2012-10-17", city: "Paris", venue: "L'Olympia", source: "Excellent (Matrix)", length: 60, equipment: "IEM: WSMA-889 > Icom IC-RX7 > Edirol R-09<br>AUD: SP-CMC-4 > SP-SPSB-11 > Olympus LS-10" },
{ date: "2013-01-09", city: "Boise", venue: "Knitting Factory", source: "Excellent (Matrix)", length: 60, equipment: "AUD 1: Sonic Studios DSM6s > PA-6LC > iRiver H120<br>AUD 2: Countryman B3 Omnidirectional > Edirol R-09" },
{ date: "2013-01-23", city: "Nashville", venue: "Ryman Auditorium", source: "Excellent (Audience)", length: 60, equipment: "Church-Audio Cardoid Mics > STC-9200 Preamp > Edirol R-09" },
{ date: "2013-01-31", city: "New York", venue: "Radio City Music Hall", source: "Excellent (Audience)", length: 60, equipment: "DPA-4060 > Sony PCM-M10" },
{ date: "2013-07-13", city: "Werchter", venue: "TW Classic Festival", source: "Excellent (FM)", length: 60, equipment: "FM > Pioneer F-Z93L > Edirol R-09HR" },
{ date: "2013-11-14", city: "London", venue: "Under the Bridge", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Receiver > Yamaha CDR1500 > FLAC" },
{ date: "2013-11-16", city: "London", venue: "BBC Radio 2 Studios", source: "Excellent (FM)", length: 60, equipment: "Digital Satellite Broadcast > DVB-S > TBS 6984" },
{ date: "2019-09-07", city: "The Hague", venue: "Noorderstrand", source: "Very Good (Audience)", length: 60, equipment: "Soundman OKM II > Roland R-07" },
{ date: "2019-10-12", city: "London", venue: "BBC Radio 2 Studios", source: "Excellent (FM)", length: 60, equipment: "FM Broadcast > Harmon Kardon TU980 tuner > TEAC CDRW890 standalone CD recorder" },
{ date: "2020-02-11", city: "Amsterdam", venue: "AFAS Live", source: "Excellent (Audience)", length: 60, equipment: "CA-11(o) > Tascam DR-2d" },
{ date: "2022-06-10", city: "Tetbury", venue: "Westonbirt Arboretum", source: "Very Good (Audience)", length: 60, equipment: "Motorola G7 Power (Internal Mics) > Parrot Audio Recorder Pro" },
{ date: "2022-07-03", city: "Werchter", venue: "Werchter Festival", source: "Excellent (FM)", length: 60, equipment: "Marantz M-CR610 > Edirol R-09" },
{ date: "2024-02-20", city: "London", venue: "Shepherd's Bush Empire", source: "Excellent (Matrix)", length: 60, equipment: "AUD 1: SP-CMC-2 > SP-SPSB-10 > Tascam DR-2d<br>AUD 2: CA-11(c) > Ugly Battery Box > Tascam DR-2d" },
{ date: "2024-04-19", city: "Amsterdam", venue: "AFAS Live", source: "Excellent (Audience)", length: 60, equipment: "DPA 4061 > SP-SPSB-10 > Tascam DR-2d" },
{ date: "2024-04-19", city: "Amsterdam", venue: "AFAS Live", source: "Excellent (Audience)", length: 60, equipment: "Schoeps MK41 > Active Cables > Zoom F3" },
{ date: "2024-04-19", city: "Amsterdam", venue: "AFAS Live", source: "Excellent (Audience)", length: 60, equipment: "CA-11(c) > Ugly Battery Box > Roland R-05" },
{ date: "2024-04-21", city: "Cologne", venue: "Palladium", source: "Excellent (Audience)", length: 60, equipment: "AT853 > SP-SPSB-10 > Roland R-05" },
{ date: "2024-04-21", city: "Cologne", venue: "Palladium", source: "Excellent (Audience)", length: 60, equipment: "CA-11(c) > Ugly Battery Box > Roland R-05" },
{ date: "2024-04-26", city: "Paris", venue: "L’Olympia", source: "Excellent (Audience)", length: 60, equipment: "AT853 > SP-SPSB-10 > Roland R-05" },
{ date: "2024-05-03", city: "Leeds", venue: "First Direct Arena", source: "Very Good (Audience)", length: 60, equipment: "Built-in Mics > Tascam DR-2d" },
{ date: "2024-05-04", city: "Birmingham", venue: "Utilita Arena", source: "Very Good (Audience)", length: 120, equipment: "Built-in Mics > Zoom H2n" },
{ date: "2024-05-04", city: "Birmingham", venue: "Utilita Arena", source: "Excellent (Audience)", length: 120, equipment: "AT943 > SP-SPSB-1 > Roland R-05" },
{ date: "2024-05-11", city: "London", venue: "02 Arena", source: "Excellent (Audience)", length: 60, equipment: "CA-11(c) > Ugly Battery Box > Edirol R-05" },
{ date: "2024-05-11", city: "London", venue: "02 Arena", source: "Excellent (IEM)", length: 60, equipment: "Receiver > Tascam DR-2d" },
{ date: "2024-05-11", city: "London", venue: "02 Arena", source: "Excellent (Matrix)", length: 60, equipment: "AUD: CA-11(c) > Ugly Battery Box > Edirol R-05<br>IEM: Receiver > Tascam DR-2d" },
{ date: "2024-07-20", city: "Nieuwpoort", venue: "Beach Festival", source: "Excellent (Audience)", length: 60, equipment: "AT853 > SP-SPSB-10 > Roland R-05" },
{ date: "2024-07-20", city: "Nieuwpoort", venue: "Beach Festival", source: "Excellent (Audience)", length: 60, equipment: "AT831 > Tascam DR-2d" },
{ date: "2024-07-20", city: "Nieuwpoort", venue: "Beach Festival", source: "Excellent (Matrix)", length: 60, equipment: "AUD 1: AT853 > SP-SPSB-10 > Roland R-05<br>AUD 2: AT831 > Tascam DR-2d" },
{ date: "2024-08-07", city: "Bonn", venue: "Kunst!rasen", source: "Excellent (Audience)", length: 60, equipment: "Church Audio CA-11(c) > Ugly Battery Box > Roland R-05" },
{ date: "2024-09-26", city: "Washington", venue: "The Anthem", source: "Very Good (Audience)", length: 60, equipment: "LG V60 > RecForge II Pro > FLAC" }
];

// Get DOM elements
const recordingsGrid = document.getElementById("recordingsGrid");

// Populate year and city filter options dynamically
const yearFilter = document.getElementById("yearFilter");
const cityFilter = document.getElementById("cityFilter");

function populateFilters() {
    const years = new Set();
    const citiesSet = new Set(); // Use a Set to avoid duplicates

    recordings.forEach(recording => {
        years.add(recording.date.split("-")[0]); // Extract year from date
        citiesSet.add(recording.city); // Add city to the Set
    });

    // Convert the Set of cities to an array and sort it
    const cities = Array.from(citiesSet).sort();

    // Populate year filter
    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Populate city filter
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityFilter.appendChild(option);
    });
}

// Function to load recordings into the grid
function loadRecordings(recordingsToLoad = recordings) {
    recordingsGrid.innerHTML = ""; // Clear current grid

    recordingsToLoad.forEach(recording => {
        const card = document.createElement("div");
        card.className = "recording-card";
        card.innerHTML = `
            <h3>${recording.city}, ${recording.date}</h3>
            <p><strong>Venue:</strong> ${recording.venue}</p>
            <p><strong>Source:</strong> ${recording.source}</p>
            <p><strong>Length:</strong> ${recording.length} minutes</p>
            <p><strong>Equipment:</strong> ${recording.equipment}</p>
        `;
        recordingsGrid.appendChild(card); // Add card to grid
    });

    // Update the count of total recordings
    document.getElementById("recording-count").innerText = `Total Recordings: ${recordingsToLoad.length}`;
}

// Filter Functionality
function filterRecordings() {
    const yearFilterValue = yearFilter.value;
    const sourceFilterValue = document.getElementById("sourceFilter").value;
    const cityFilterValue = cityFilter.value;
    const searchInputValue = document.getElementById("searchInput").value.toLowerCase();

    const filteredRecordings = recordings.filter(recording => {
        const matchesYear = yearFilterValue === "all" || recording.date.startsWith(yearFilterValue);
        const matchesSource = sourceFilterValue === "all" || recording.source.includes(sourceFilterValue);
        const matchesCity = cityFilterValue === "all" || recording.city.toLowerCase() === cityFilterValue.toLowerCase();
        const matchesSearch = recording.city.toLowerCase().includes(searchInputValue) || recording.venue.toLowerCase().includes(searchInputValue);
        return matchesYear && matchesSource && matchesCity && matchesSearch;
    });

    // Load the filtered recordings
    loadRecordings(filteredRecordings);
}

// Initialize filters and event listeners
document.addEventListener("DOMContentLoaded", function() {
    populateFilters(); // Populate filters on page load
    loadRecordings(); // Load recordings on page load

    // Set up event listeners for filters
    yearFilter.addEventListener("change", filterRecordings);
    document.getElementById("sourceFilter").addEventListener("change", filterRecordings);
    cityFilter.addEventListener("change", filterRecordings);
    document.getElementById("searchInput").addEventListener("input", filterRecordings);
});

