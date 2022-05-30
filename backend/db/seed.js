const {
    Pool
} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'zavrsni_rad',
    password: 'bazepodataka',
    port: 5432,
});

const sql_create_category = `CREATE TABLE category (
    id int PRIMARY KEY,
    name text NOT NULL UNIQUE
)`;

const sql_create_category_id_index = `CREATE UNIQUE INDEX idx_categoryId ON category(id)`;

const sql_create_vh = `CREATE TABLE vh (
    id int PRIMARY KEY, 
    name text NOT NULL
)`;

//const sql_create_vh_id_index = `CREATE UNIQUE INDEX idx_vhId ON vh(id)`;
//ne treba index jer je mali broj vrijednosti

const sql_create_image = `CREATE TABLE image (
    id int PRIMARY KEY,
    name text NOT NULL UNIQUE, 
    description text NOT NULL, 
    location text NOT NULL UNIQUE,
    categoryId int REFERENCES category(id),
    vhId int REFERENCES vh(id),
    orNumCategory int NOT NULL
)`;

const sql_create_image_id_index = `CREATE UNIQUE INDEX idx_imageId ON image(id)`;

const sql_create_imageMetadata = `CREATE TABLE imageMetadata (
    imageId int REFERENCES image(id), 
    JPEGsize int NOT NULL, 
    width int NOT NULL, 
    height int NOT NULL, 
    luminance NUMERIC(9,4) NOT NULL, 
    contrast NUMERIC(9,4) NOT NULL, 
    labl NUMERIC(9,4) NOT NULL, 
    laba NUMERIC(9,4) NOT NULL, 
    labb NUMERIC(9,4) NOT NULL, 
    entropy NUMERIC(9,4) NOT NULL
)`;

const sql_create_imageMetadata_id_index = `CREATE UNIQUE INDEX idx_imageIdMetadata ON imageMetadata(imageId)`;

const sql_create_emotion = `CREATE TABLE emotion (
    imageId int, 
    valenceM NUMERIC(3,2) NOT NULL,
    valenceSD NUMERIC(3,2) NOT NULL,
    avapM NUMERIC(3,2) NOT NULL,
    avapSD NUMERIC(3,2) NOT NULL,
    arousalM NUMERIC(3,2) NOT NULL,
    arousalSD NUMERIC(3,2) NOT NULL,
    FOREIGN KEY (imageID) REFERENCES image(id)
)`;

const sql_create_emotion_id_index = `CREATE UNIQUE INDEX idx_emotion ON emotion(imageId)`;

const sql_create_emotion_with_BE = `CREATE TABLE emotion_with_BE (
    imageId int, 
    sex VARCHAR(5) NOT NULL,
    happinessM NUMERIC(3,2) NOT NULL,
    happinessSD NUMERIC(3,2) NOT NULL, 
    fearM NUMERIC(3,2) NOT NULL,
    fearSD NUMERIC(3,2) NOT NULL,
    sadnessM NUMERIC(3,2) NOT NULL,
    sadnessSD NUMERIC(3,2) NOT NULL,
    surpriseM NUMERIC(3,2) NOT NULL,
    surpriseSD NUMERIC(3,2) NOT NULL,
    disgustM NUMERIC(3,2) NOT NULL,
    disgustSD NUMERIC(3,2) NOT NULL,
    angerM NUMERIC(3,2) NOT NULL,
    angerSD NUMERIC(3,2) NOT NULL,
    valenceM_SAM NUMERIC(3,2) NOT NULL,
    valenceSD_SAM NUMERIC(3,2) NOT NULL,
    arousalM_SAM NUMERIC(3,2) NOT NULL,
    arousalSD_SAM NUMERIC(3,2) NOT NULL,
    PRIMARY KEY (imageId, sex),
    FOREIGN KEY (imageID) REFERENCES image(id)
)`;

const sql_create_emotion_with_BE_id_index = `CREATE INDEX idx_emotion_with_BE ON emotion_with_BE(imageId, sex)`;

const sql_insert_category = `INSERT INTO category (
    id, name)
    VALUES 
    (0, 'Animals'),
    (1, 'Faces'),
    (2, 'Landscapes'),
    (3, 'Objects'),
    (4, 'People');
`;

const sql_insert_vh = `INSERT INTO vh (
    id, name)
    VALUES 
    (0, 'v'),
    (1, 'h');
`;

const sql_insert_image = `INSERT INTO image (
    id, name, description, location, categoryId, vhId, orNumCategory)
    VALUES 
    (1, 'Animals_011_h', 'black panther', './images/Animals_011_h', 0, 1, 11),
    (2, 'Animals_025_h', 'sheep', './images/Animals_025_h', 0, 1, 25),
    (3, 'Animals_039_h', 'dead dog', './images/Animals_039_h', 0, 1, 39),
    (4, 'Animals_041_h', 'insect', './images/Animals_041_h', 0, 1, 41),
    (5, 'Animals_074_h', 'starved dog', './images/Animals_074_h', 0, 1, 74),
    (6, 'Animals_077_h', 'sick dog', './images/Animals_077_h', 0, 1, 77),
    (7, 'Animals_100_h', 'flamingo', './images/Animals_100_h', 0, 1, 100),
    (8, 'Animals_166_v', 'cats', './images/Animals_166_v', 0, 0, 166),
    (9, 'Animals_178_v', 'a dog playing', './images/Animals_178_v', 0, 0, 178),
    (10, 'Animals_183_h', 'dog on the beach', './images/Animals_183_h', 0, 1, 183),
    (11, 'Animals_220_h', 'fish', './images/Animals_220_h', 0, 1, 220), 
    (12, 'Faces_001_h', 'children with a dog', './images/Faces_001_h', 1, 1, 1), 
    (13, 'Faces_032_h', 'boy with a cigarette', './images/Faces_032_h', 1, 1, 32), 
    (14, 'Faces_109_v', 'child smiling', './images/Faces_032_v', 1, 0, 109), 
    (15, 'Faces_131_v', 'boy smiling', './images/Faces_131_v', 1, 0, 131), 
    (16, 'Faces_143_v', 'mutilated face', './images/Faces_143_v', 1, 0, 143),
    (17, 'Faces_158_h', 'sad man', './images/Faces_158_h', 1, 1, 158), 
    (18, 'Faces_172_h', 'elderly man', './images/Faces_172_h', 1, 1, 172), 
    (19, 'Faces_231_v', 'woman smiling', './images/Faces_231_v', 1, 0, 231), 
    (20, 'Faces_283_h', 'elderly woman crying', './images/Faces_283_h', 1, 1, 283), 
    (21, 'Faces_302_h', 'homeless man', './images/Faces_302_h', 1, 1, 302), 
    (22, 'Faces_365_v', 'multilated face', './images/Faces_365_v', 1, 0, 365),
    (23, 'Landscapes_002_h', 'concentration camp', './images/Landscapes_002_h', 2, 1, 2),
    (24, 'Landscapes_026_h', 'waste', './images/Landscapes_026_h', 2, 1, 26),
    (25, 'Landscapes_121_h', 'sea', './images/Landscapes_121_h', 2, 1, 121),
    (26, 'Landscapes_139_h', 'waste', './images/Landscapes_139_h', 2, 1, 139),
    (27, 'Landscapes_180_h', 'sea', './images/Landscapes_180_h', 2, 1, 180),
    (28, 'Objects_074_v', 'drink', './images/Objects_074_v', 3, 0, 74),
    (29, 'Objects_084_v', 'table', './images/Objects_084_v', 3, 0, 84),
    (30, 'Objects_109_h', 'excrement', './images/Objects_109_h', 3, 1, 109),
    (31, 'Objects_156_v', 'bathtub', './images/Objects_156_v', 3, 0, 156),
    (32, 'Objects_192_h', 'bathtub', './images/Objects_192_h', 3, 1, 192),
    (33, 'Objects_247_h', 'mouse', './images/Objects_247_h', 3, 1, 247),
    (34, 'Objects_285_h', 'crashed motocycle', './images/Objects_285_h', 3, 1, 285),
    (35, 'People_024_v', 'butcher', './images/People_024_v', 4, 0, 24),
    (36, 'People_103_h', 'beach', './images/People_103_h', 4, 1, 103),
    (37, 'People_140_h', 'wounded people', './images/People_140_h', 4, 1, 140),
    (38, 'People_146_h', 'garbage collectors', './images/People_146_h', 4, 1, 146),
    (39, 'People_172_v', 'man swinging', './images/People_172_v', 4, 0, 172),
    (40, 'People_190_h', 'diver', './images/People_190_h', 4, 1, 190),
    (41, 'People_240_h', 'skin disease', './images/People_240_h', 4, 1, 240);
`;

const sql_insert_imageMetadata = `INSERT INTO imageMetadata (
    imageId, JPEGsize, width, height, luminance, contrast, labl, laba, labb, entropy)
    VALUES 
    (1, 640611, 1600, 1200, 83.1651, 69.6065, 34.5174, -8.7095, 6.3573, 7.6694),
    (2, 672276, 1600, 1200, 90.6058, 48.8284, 37.8299, -2.5875, 8.5921, 7.5421),
    (3, 208986, 1600, 1200, 94.1440, 67.2255,  38.8553, 1.2455, 12.8779, 7.4308),
    (4, 194620, 1600, 1200, 183.2184, 82.7075, 73.0507, 1.4860, 3.2303, 6.4673),
    (5, 377872, 1600, 1200, 137.3977, 69.7777, 56.3811, 2.7902, 17.7709, 7.8357),
    (6, 339744, 1600, 1200, 109.7225, 68.5571, 44.8761, 0.5406, 1.4853, 7.8328),
    (7, 223887, 1600, 1200, 167.1876, 61.5586, 67.9692, -7.9143, -5.0569, 7.6312),
    (8, 163039, 1200, 1600, 95.5013, 59.2598, 41.4024, 15.9584, 25.6612, 7.4973),
    (9, 233599, 1200, 1600, 167.3737, 76.0956, 67.7086, -8.4379, 15.7449, 7.3811),
    (10, 351577, 1600, 1200, 122.9337, 51.1008, 51.0778, -1.1792, -7.7528, 7.4972),
    (11, 498849, 1600, 1200, 127.8089, 66.4399, 54.4185, -3.8902, -9.5913, 7.8390),
    (12, 247453, 1600, 1200, 117.7890, 77.3067, 48.0615, 3.3972, 7.6271, 7.8415),
    (13, 261678, 1600, 1200, 111.6514, 45.2711, 46.5862, -5.0481, -0.6964, 7.3206),
    (14, 148784, 1200, 1600, 70.7823, 53.1200, 29.8630, 5.1675, 6.9301, 7.1946),
    (15, 172459, 1200, 1600, 153.5364, 68.1934, 62.6475, 5.6798, 4.1584, 6.8813),
    (16, 170724, 1200, 1600, 157.4822, 82.8809, 63.5457, 7.0985, 6.0065, 7.5637),
    (17, 157001, 1600, 1200, 73.4563, 57.8990, 30.8850, 6.9140, 8.1017,	7.4571),
    (18, 268860, 1600, 1200, 112.9376, 71.9549, 47.4483, 11.2050, 11.1330, 7.8439),
    (19, 379573, 1200, 1600, 50.9104, 66.1422, 20.2423, 2.3608, 3.6063, 6.7810),
    (20, 160284, 1600, 1200, 95.9220, 72.4910, 39.3429, 1.1885, 1.6960, 7.5960),
    (21, 351934, 1600, 1200, 121.3621, 74.3848, 49.5980, 2.0064, 5.8214, 7.9078),
    (22, 137924, 1200, 1600, 125.8946, 43.0407, 52.8346, 5.2789, 3.6374, 6.9255), 
    (23, 263487, 1600, 1200, 143.5268, 70.5831, 58.2736, -0.0452, -0.2705, 7.9095), 
    (24, 593555, 1600, 1200, 100.1045, 52.4017, 41.9417, -2.5854, 5.2652, 7.6303), 
    (25, 268837, 1600, 1200, 146.8062, 44.9905, 61.2605, -8.2652, -15.0301, 7.4368), 
    (26, 525614, 1600, 1200, 76.3182, 61.2217, 31.6119, 0.4051, 15.4068, 7.5688), 
    (27, 444813, 1600, 1200, 127.2695, 60.8682, 53.2728, -6.5717, -2.1011, 7.7763), 
    (28, 195748, 1200, 1600, 120.0289, 77.5262, 48.7439, -1.2728, 9.4198, 7.6958), 
    (29, 224584, 1200, 1600, 130.1680, 56.7907, 57.3205, 27.1879, 48.8612, 7.6986),
    (30, 236173, 1600, 1200, 189.5632, 65.5125, 75.9149, 0.8859, 3.7909, 7.3076), 
    (31, 196660, 1200, 1600, 183.1050, 30.8232, 74.3665, -7.2205, -1.7704, 6.4637),
    (32, 117996, 1600, 1200, 160.3676, 51.7891, 66.7708, -14.3544, 5.0250, 7.4174), 
    (33, 295690, 1600, 1200, 148.3746, 64.0031, 60.7781, 2.4023, 8.0895, 75053), 
    (34, 436588, 1600, 1200, 67.9600, 44.7015, 28.2153, -0.6678, 3.5431, 7.3009), 
    (35, 318719, 1200, 1600, 144.5188, 66.5409, 59.8658, 4.5064, -1.4263, 7.8733),
    (36, 289223, 1600, 1200, 155.8856, 61.3377, 63.9349, -2.6771, -10.8146, 7.4186), 
    (37, 325358, 1600, 1200, 100.4894, 52.9279, 42.2506, 2.7542, -0.5809, 7.5606), 
    (38, 343985, 1600, 1200, 118.222, 56.7789, 49.0548, -1.4558, 4.2640, 7.6988), 
    (39, 359216, 1200, 1600, 119.0166, 56.3597, 49.9957, -8.8494, 0.6884, 7.6186),
    (40, 385125, 1600, 1200, 98.4291, 55.7373, 43.0061, -0.7026, -13.3812, 7.6983), 
    (41, 252660, 1600, 1200, 174.1183, 71.9169, 70.3268, -0.1076, 14.0713, 7.4062);
`;

const sql_insert_emotion = `INSERT INTO emotion (
    imageId, valenceM, valenceSD, avapM, avapSD, arousalM, arousalSD) 
    VALUES 
    (1, 5.17, 2.36, 5.78, 2.52, 7.37, 1.44), 
    (2, 2.72, 1.26, 3.22, 1.29, 6.36, 1.49),
    (3, 2.76, 1.40, 2.51, 1.29, 6.92, 1.34),
    (4, 4.04, 1.66, 3.25, 1.85, 6.48, 1.39),
    (5, 1.87, 1.26, 2.49, 1.59, 7.26, 1.33),
    (6, 1.84, 0.96, 2.05, 1.09, 7.49, 1.35),
    (7, 7.18, 1.23, 7.11, 1.17,	3.64, 2.03),
    (8, 7.87, 1.78, 7.84, 1.48, 3.24, 2.41),
    (9, 6.83, 1.42, 6.58, 1.42,	5.11, 1.85),
    (10, 7.71, 1.37, 7.27, 1.69, 4.50, 2.47),
    (11, 7.97, 1.34, 7.83, 1.30, 3.47, 2.50),
    (12, 7.81, 1.05, 7.61, 0.98, 4.97, 2.15),
    (13, 3.72, 1.26, 4.69, 1.39, 5.95, 1.19),
    (14, 6.63, 1.44, 5.61, 1.42, 4.71, 1.19),
    (15, 7.28, 1.50, 6.94, 1.35, 5.42, 1.80),
    (16, 4.43, 1.93, 4.17, 1.77, 6.17, 1.28),
    (17, 2.03, 1.48, 2.03, 1.58, 7.05, 1.75),
    (18, 3.15, 1.44, 3.50, 1.34, 6.08, 1.52),
    (19, 7.31, 1.36, 6.52, 1.40, 5.06, 1.68),
    (20, 2.78, 1.55, 3.29, 1.90, 6.54, 1.35),
    (21, 3.28, 1.24, 3.71, 1.60, 5.69, 1.49),
    (22, 2.21, 1.84, 2.13, 1.70, 7.08, 1.72),
    (23, 4.21, 2.13, 4.95, 2.09, 5.62, 1.67),
    (24, 4.29, 1.39, 4.78, 1.18, 5.41, 1.15),
    (25, 7.42, 1.29, 7.45, 1.39, 2.19, 1.27),
    (26, 7.82, 1.17, 7.84, 1.35, 4.21, 2.64),
    (27, 5.00, 1.74, 5.08, 1.96, 5.03, 1.50),
    (28, 6.90, 1.90, 6.60, 1.97, 5.18, 1.75),
    (29, 6.58, 1.46, 6.48, 1.74, 4.92, 2.04),
    (30, 3.29, 1.70, 2.74, 1.50, 5.92, 1.11),
    (31, 2.89, 1.16, 2.92, 1.29, 6.08, 1.34),
    (32, 5.96, 1.16, 6.18, 1.48, 5.33, 1.71),
    (33, 4.25, 1.32, 4.28, 1.07, 5.28, 0.84),
    (34, 4.68, 1.56, 5.43, 2.11, 5.28, 1.68),
    (35, 7.78, 1.09, 7.55, 1.16, 4.42, 1.96),
    (36, 5.76, 1.46, 5.65, 1.68, 4.16, 1.53),
    (37, 4.14, 1.61, 4.86, 1.81, 5.33, 1.56),
    (38, 3.11, 1.59, 3.57, 1.65, 6.26, 1.45),
    (39, 7.03, 1.56, 7.19, 1.18, 5.03, 2.29), 
    (40, 7.26, 1.43, 6.92, 1.16, 5.34, 2.20),
    (41, 1.92, 1.04, 2.42, 1.65, 7.10, 1.30);

`;

const sql_insert_emotion_with_BE = `INSERT INTO emotion_with_BE (
    imageId, sex, happinessM, happinessSD, fearM, fearSD, sadnessM, sadnessSD, surpriseM, 
    surpriseSD, disgustM, disgustSD, angerM, angerSD, valenceM_SAM, valenceSD_SAM, arousalM_SAM, arousalSD_SAM)
    VALUES 
    (1, 'M', 2.36, 1.20, 3.56, 2.76, 1.56, 1.17, 4.20, 5.12, 1.85, 0.65, 1.87, 1.69, 1.00, 0.65, 2.25, 1.48),
    (2, 'M', 1.07, 4.00, 2.07, 2.53, 2.60, 2.53, 4.00, 3.20, 0.27, 1.96, 1.58, 2.07, 2.06, 2.03, 2.07, 1.61),
    (3, 'M', 1.00, 4.53, 2.93, 2.80, 3.13, 4.33, 5.80, 2.00, 0.01, 2.53, 2.05, 2.24, 2.36, 2.16, 1.74, 1.41),
    (4, 'M', 1.24, 1.28, 3.08, 3.24, 1.61, 4.44, 4.08, 3.68, 0.72, 0.74, 1.50, 1.90, 1.12, 1.64, 2.22, 1.41),
    (5, 'M', 1.00, 5.80, 2.87, 3.07, 5.07, 3.20, 6.07, 2.00, 0.01, 1.74, 2.17, 2.09, 2.15, 1.82, 2.69, 1.04),
    (6, 'M', 1.07, 5.40, 2.40, 2.13, 4.80, 2.73, 5.53, 2.36, 0.26, 1.40, 1.92, 1.55, 2.04, 1.98, 2.33, 1.50),
    (7, 'M', 4.80, 1.13, 1.20, 1.67, 1.00, 1.00, 2.40, 6.87, 1.78, 0.52, 0.77, 1.18, 0.01, 0.01, 1.92, 1.68),
    (8, 'M', 5.60, 1.00, 1.07, 1.27, 1.00, 1.07, 3.40, 7.87, 1.76, 0.01, 0.26, 1.03, 0.01, 0.26, 2.20, 1.36),
    (9, 'M', 4.87, 1.07, 1.07, 1.87, 1.00, 1.00, 3.00, 7.07, 2.20, 0.26, 0.26, 1.25, 0.01, 0.01, 2.00, 1.58),
    (10, 'M', 4.60, 1.07, 1.00, 1.00, 1.00, 1.00, 2.80, 6.60, 2.32, 0.26, 0.01, 0.01, 0.01, 0.01, 2.08, 1.45),
    (11, 'M', 4.93, 1.00, 1.33, 1.13, 1.00, 1.00, 3.00, 7.27, 1.49, 0.01, 0.90, 0.35, 0.01, 0.01, 2.17, 1.16),
    (12, 'M', 5.00, 1.07, 1.27, 1.07, 1.00, 1.00, 3.33, 7.27, 1.73, 0.26, 0.80, 0.26, 0.01, 0.01, 2.38, 1.33),
    (13, 'M', 1.21, 4.27, 2.00, 2.47, 4.20, 3.27, 5.00, 2.46, 0.58, 2.09, 1.77, 2.10, 2.37, 2.60, 2.90, 1.51),
    (14, 'M', 4.44, 1.04, 1.00, 1.50, 1.00, 1.04, 2.92, 6.60, 1.71, 0.20, 0.01, 0.83, 0.01, 0.20, 1.73, 1.44),
    (15, 'M', 4.67, 1.00, 1.00, 1.13, 1.00, 1.00, 2.00, 7.07, 1.88, 0.01, 0.01, 0.35, 0.01, 0.01, 1.69, 1.28),
    (16, 'M', 1.00, 4.41, 3.65, 3.71, 2.47, 4.76, 5.24, 1.88, 0.01, 2.35, 2.55, 2.57, 1.84, 2.41, 2.93, 1.41),
    (17, 'M', 1.23, 3.40, 2.20, 2.00, 2.14, 1.64, 2.93, 4.20, 0.44, 1.99, 1.97, 1.85, 1.70 ,1.15, 2.37, 1.52),
    (18, 'M', 1.00, 5.20, 2.60, 2.20, 2.93, 2.73, 4.67, 2.53, 0.01, 2.08, 1.99, 1.57, 2.05, 1.67, 2.26, 1.51),
    (19, 'M', 2.82, 1.06, 1.12, 1.35, 1.00, 1.00, 2.44, 5.69, 2.01, 0.24, 0.33, 0.49, 0.01, 0.01, 1.75, 0.95),
    (20, 'M', 1.14, 4.80, 2.33, 2.27, 2.20, 1.27, 4.40, 2.93, 0.53, 1.78, 1.45, 1.67, 2.01, 1.03, 2.32, 1.44),
    (21, 'M', 1.47, 4.20, 2.00, 2.53, 1.73, 2.07, 3.67, 3.29, 0.83, 1.42, 1.60, 2.03, 1.49, 1.71, 1.99, 1.49),
    (22, 'M', 1.00, 4.80, 3.40, 5.20, 1.53, 5.20, 6.67, 1.67, 0.01, 2.46, 2.16, 1.74, 1.13, 1.61, 1.76, 0.82), 
    (23, 'M', 1.21, 3.88, 3.00, 2.32, 2.96, 2.16, 4.08, 3.00, 0.66, 1.94, 1.61, 1.55, 1.86, 1.80, 2.08, 1.38), 
    (24, 'M', 1.00, 4.27, 1.67, 1.36, 5.13, 4.67, 4.87, 2.27, 0.01, 2.40, 1.50, 0.84, 1.46, 2.16, 2.53, 1.53), 
    (25, 'M', 4.68, 1.17, 1.04, 1.36, 1.04, 1.00, 3.04, 6.88, 1.70, 0.38, 0.20, 0.86, 0.20, 0.01, 1.93, 1.33), 
    (26, 'M', 1.00, 3.29, 1.35, 2.71, 3.76, 4.06, 3.82, 2.88, 0.01, 2.02, 1.00, 1.83, 2.36, 2.19, 2.32, 1.65), 
    (27, 'M', 5.47, 1.00, 1.00, 1.07, 1.00, 1.00, 3.87, 7.20, 1.68, 0.01, 0.01, 0.26, 0.01, 0.01, 2.00, 1.08), 
    (28, 'M', 4.33, 1.00, 1.07, 1.53, 1.07, 1.00, 2.53, 7.07, 1.95, 0.01, 0.26, 1.36, 0.26, 0.01, 1.92, 1.39), 
    (29, 'M', 4.80, 1.00, 1.07, 1.80, 1.07, 1.00, 3.73, 7.40, 2.14, 0.01, 0.26, 1.70, 0.26, 0.01, 2.63, 1.50),
    (30, 'M', 1.04, 1.44, 1.64, 2.04, 1.36, 3.84, 2.88, 3.92, 0.20, 0.96, 1.22, 1.34, 0.91, 1.91, 1.94, 1.15), 
    (31, 'M', 1.40, 2.04, 1.52, 1.68, 1.40, 3.40, 2.28, 4.08, 0.91, 1.40, 0.87, 1.07, 0.91, 1.71, 1.14, 1.19),
    (32, 'M', 2.76, 1.00, 1.06, 1.76, 1.00, 1.00, 2.71, 6.06, 1.52, 0.01, 0.24, 0.97, 0.01, 0.01, 1.79, 1.14), 
    (33, 'M', 1.57, 1.20, 1.07, 1.00, 1.13, 1.00, 1.67, 5.31, 1.02, 0.56, 0.26, 0.01, 0.52, 0.01, 1.18, 1.03), 
    (34, 'M', 1.00, 3.35, 2.41, 2.29, 1.88, 1.53, 3.24, 3.35, 0.01, 1.80, 1.66, 1.61, 1.11, 0.80, 2.19, 1.17), 
    (35, 'M', 1.09, 1.60, 1.54, 1.63, 1.60, 2.92, 2.76, 4.00, 0.29, 1.12, 0.93, 1.01, 1.22, 1.73, 2.07, 1.22),
    (36, 'M', 4.93, 1.00, 1.00, 1.20, 1.00, 1.07, 2.40, 6.67, 1.67, 0.01, 0.01, 0.77, 0.01, 0.26, 1.24, 1.72), 
    (37, 'M', 1.00, 4.40, 2.56, 2.68, 2.12, 2.68, 4.32, 2.92, 0.01, 1.73, 1.58, 1.65, 1.64, 1.55, 2.25, 1.19), 
    (38, 'M', 1.52, 1.56, 1.08, 1.46, 1.08, 1.21, 1.25, 4.92, 1.08, 0.96, 0.28, 0.72, 0.28, 0.41, 0.53, 0.57), 
    (39, 'M', 4.60, 1.17, 1.38, 1.80, 1.00, 1.00, 3.48, 6.68, 1.96, 0.48, 0.65, 1.19, 0.01, 0.01, 1.90, 1.55),
    (40, 'M', 5.13, 1.00, 1.27, 2.20, 1.00, 1.00, 4.07, 7.60, 1.68, 0.01, 0.80, 2.04, 0.01, 0.01, 2.46, 1.24), 
    (41, 'M', 1.00, 3.94, 2.71, 2.76, 1.88, 4.41, 3.94, 2.35, 0.01, 2.16, 1.65, 1.75, 1.41, 1.70, 2.19, 1.32),
    (1, 'F', 2.79, 1.63, 3.84, 2.79, 1.44, 1.42, 5.00, 5.21, 1.87, 1.12, 1.77, 1.47, 0.92, 0.96, 2.16, 1.58),
    (2, 'F', 1.04, 4.71, 2.33, 2.58, 4.21, 2.54, 5.42, 2.46, 0.21, 1.52, 1.71, 1.59, 1.89, 1.69, 1.77, 1.22),
    (3, 'F', 1.00, 4.75, 3.29, 3.67, 3.54, 4.83, 6.67, 1.88, 0.01, 2.33, 2.54, 2.37, 2.43, 1.76, 1.88, 0.99),
    (4, 'F', 1.33, 1.50, 4.05, 3.68, 1.63, 5.26, 5.37, 2.89, 0.97, 0.92, 2.12, 2.14, 1.26, 2.18, 2.17, 1.23),
    (5, 'F', 1.00, 5.29, 3.42, 3.04, 4.17, 3.46, 5.67, 1.96, 0.01, 1.49, 2.28, 2.18, 2.30, 2.02, 1.93, 1.00),
    (6, 'F', 1.04, 5.08, 2.67, 2.54, 3.92, 3.04, 5.71, 2.25, 0.21, 2.02, 1.97, 1.91, 1.93, 1.85, 1.57, 1.22),
    (7, 'F', 4.58, 1.05, 1.00, 1.35, 1.04, 1.00, 3.54, 6.52, 2.06, 0.21, 0.01, 0.65, 0.20, 0.01, 2.11, 1.56),
    (8, 'F', 5.54, 1.04, 1.09, 1.61, 1.00, 1.00, 4.00, 7.79, 1.50, 0.21, 0.43, 1.16, 0.01, 0.01, 2.06, 0.98),
    (9, 'F', 4.92, 1.05, 1.38, 2.38, 1.00, 1.21, 3.79, 7.04, 1.67, 0.21, 0.71, 1.81, 0.01, 0.59, 1.82, 1.20),
    (10, 'F', 5.17, 1.14, 1.27, 1.70, 1.14, 1.00, 3.75, 7.21, 1.71, 0.35, 0.55, 1.18, 0.47, 0.01, 1.89, 1.53),
    (11, 'F', 5.21, 1.08, 1.52, 1.57, 1.00, 1.04, 4.42, 7.21, 1.50, 0.28, 0.99, 0.99, 0.01, 0.21, 2.06, 1.18),
    (12, 'F', 5.38, 1.00, 1.48, 1.48, 1.13, 1.09, 3.96, 7.25, 1.58, 0.01, 0.85, 0.90, 0.34, 0.29, 2.03, 1.19),
    (13, 'F', 1.09, 3.92, 2.50, 2.71, 4.25, 3.00, 4.75, 2.50, 0.29, 1.74, 1.82, 1.60, 1.51, 2.19, 1.48, 1.22),
    (14, 'F', 5.89, 1.00, 1.00, 1.68, 1.00, 1.11, 4.32, 7.53, 1.59, 0.01, 0.01, 1.11, 0.01, 0.46, 2.14, 1.43),
    (15, 'F', 4.29, 1.00, 1.04, 1.14, 1.04, 1.04, 3.29, 6.75, 1.73, 0.01, 0.21, 0.35, 0.21, 0.21, 1.97, 1.19),
    (16, 'F', 1.00, 4.83, 3.67, 3.67, 4.13, 4.46, 5.75, 1.75, 0.01, 2.10, 2.04, 1.95, 2.13, 1.98, 2.27, 0.90),
    (17, 'F', 1.13, 4.17, 2.33, 1.67, 1.63, 1.54, 4.08, 2.71, 0.34, 1.34, 1.52, 1.13, 1.06, 1.28, 1.82, 0.86),
    (18, 'F', 1.04, 5.67, 3.50, 2.88, 2.92, 2.67, 5.54, 1.75, 0.20, 1.24, 2.30, 2.01, 1.98, 1.83, 2.04, 0.85),
    (19, 'F', 3.25, 1.17, 1.04, 1.48, 1.00, 1.00, 1.46, 5.96, 1.73, 0.38, 0.21, 0.85, 0.01, 0.01, 0.78, 0.81),
    (20, 'F', 1.13, 4.67, 2.92, 2.75, 3.04, 2.00, 4.92, 2.38, 0.45, 1.76, 2.21, 2.17, 2.12, 1.59, 2.17, 1.28),
    (21, 'F', 1.13, 4.58, 2.83, 2.63, 2.79, 2.67, 4.58, 2.67, 0.34, 1.64, 2.14, 1.81, 1.84, 2.14, 1.74, 0.92),
    (22, 'F', 1.00, 5.00, 4.00, 4.92, 2.83, 4.38, 6.08, 1.88, 0.01, 1.72, 2.34, 2.02, 1.88, 1.88, 1.82, 1.15), 
    (23, 'F', 1.17, 4.79, 3.79, 2.37, 4.05, 2.16, 4.37, 2.61, 0.51, 1.65, 1.40, 1.67, 1.65, 1.80, 1.50, 1.14), 
    (24, 'F', 1.00, 3.79, 2.46, 2.04, 4.21, 3.67, 4.08, 2.75, 0.01, 1.50, 1.53, 1.40, 1.82, 1.81, 2.04, 0.79), 
    (25, 'F', 6.05, 1.06, 1.06, 1.56, 1.00, 1.00, 4.16, 7.53, 1.27, 0.24, 0.24, 0.98, 0.01, 0.01, 2.54, 1.39), 
    (26, 'F', 1.00, 3.29, 1.41, 1.52, 4.50, 4.29, 3.96, 2.63, 0.01, 1.94, 1.18, 0.73, 1.87, 2.05, 2.39, 1.01), 
    (27, 'F', 5.54, 1.00, 1.30, 2.17, 1.00, 1.00, 4.33, 7.50, 1.47, 0.01, 0.63, 1.81, 0.01, 0.01, 2.26, 1.14), 
    (28, 'F', 4.71, 1.00, 1.05, 1.87, 1.00, 1.00, 3.96, 7.29, 1.85, 0.01, 0.21, 1.18, 0.01, 0.01, 2.31, 1.23), 
    (29, 'F', 4.83, 1.09, 1.09, 1.96, 1.13, 1.00, 4.04, 6.75, 1.83, 0.29, 0.29, 1.73, 0.46, 0.01, 2.44, 1.98),
    (30, 'F', 1.06, 1.50, 1.59, 2.22, 1.94, 4.95, 3.95, 3.47, 0.24, 0.99, 1.06, 1.56, 1.35, 2.04, 1.93, 1.31), 
    (31, 'F', 1.22, 2.42, 1.68, 1.84, 1.84, 3.47, 2.79, 4.05, 0.73, 1.54, 1.16, 1.38, 1.38, 1.68, 1.72, 1.08),
    (32, 'F', 3.38, 1.09, 1.04, 1.54, 1.00, 1.00, 1.67, 6.00, 1.61, 0.29, 0.21, 0.98, 0.01, 0.01, 0.87, 1.14), 
    (33, 'F', 2.47, 1.89, 1.39, 2.84, 1.44, 1.83, 3.26, 5.00, 1.65, 1.29, 0.98, 1.68, 0.86, 1.04, 2.38, 0.91), 
    (34, 'F', 1.00, 3.63, 3.46, 2.00, 2.04, 1.17, 3.79, 3.04, 0.01, 1.76, 1.96, 1.50, 1.49, 0.58, 2.08, 1.12), 
    (35, 'F', 1.11, 2.84, 2.00, 1.71, 2.44, 4.00, 4.00, 3.32, 0.32, 1.57, 1.14, 0.92, 1.65, 2.00, 1.89, 1.11),
    (36, 'F', 5.08, 1.13, 1.23, 1.50, 1.05, 1.00, 4.46, 6.92, 1.50, 0.34, 0.53, 0.91, 0.21, 0.01, 2.28, 1.44), 
    (37, 'F', 1.00, 5.26, 3.58, 2.74, 3.16, 4.16, 5.58, 2.32, 0.01, 1.59, 2.19, 2.28, 2.34, 2.09, 1.92, 0.95), 
    (38, 'F', 2.21, 1.47, 1.06, 1.42, 1.11, 1.33, 2.00, 4.89, 1.65, 0.90, 0.24, 0.96, 0.32, 0.59, 1.33, 0.32), 
    (39, 'F', 5.74, 1.00, 1.17, 2.11, 1.00, 1.00, 4.68, 7.68, 1.37, 0.01, 0.51, 1.57, 0.01, 0.01, 2.63, 1.29),
    (40, 'F', 4.92, 1.08, 1.79, 2.08, 1.00, 1.00, 4.42, 7.38, 1.47, 0.28, 0.93, 1.47, 0.01, 0.01, 1.98, 1.01), 
    (41, 'F', 1.00, 4.13, 2.79, 2.79, 2.38, 4.38, 4.54, 2.54, 0.01, 2.27, 1.82, 1.86, 1.88, 2.12, 2.04, 1.22), 
    (1, 'ALL', 2.55, 1.85, 3.68, 1.81, 1.39, 0.89, 2.77, 1.58, 1.29, 0.81, 1.51, 0.96, 5.16, 1.51, 4.55, 2.23),
    (2, 'ALL', 1.05, 0.23, 2.23, 1.65, 4.44, 1.71, 2.56, 1.76, 2.54, 1.80, 3.59, 2.09, 2.74, 1.41, 4.87, 1.99),
    (3, 'ALL', 1.00, 0.01, 3.15, 2.35, 4.67, 2.38, 3.33, 2.33, 4.64, 1.91, 3.38, 2.38, 1.92, 1.15, 6.33, 1.85),
    (4, 'ALL', 1.28, 0.83, 3.50, 1.84, 1.37, 0.82, 3.43, 1.99, 4.80, 1.91, 1.62, 1.17, 3.35, 1.38, 4.64, 2.26),
    (5, 'ALL', 1.00, 0.01, 3.21, 2.23, 5.49, 1.59, 3.05, 2.11, 3.36, 1.93, 4.51, 2.26, 1.97, 1.00, 5.82, 2.22),
    (6, 'ALL', 1.05, 0.23, 2.56, 1.93, 5.21, 1.79, 2.38, 1.77, 2.92, 1.88, 4.26, 2.00, 2.29, 1.31, 5.64, 1.87),
    (7, 'ALL', 4.67, 1.94, 1.08, 0.49, 1.08, 0.36, 1.47, 0.89, 1.00, 0.01, 1.03, 0.16, 6.66, 1.60, 3.10, 2.09),
    (8, 'ALL', 5.56, 1.59, 1.08, 0.36, 1.03, 0.16, 1.47, 1.11, 1.03, 0.16, 1.00, 0.01, 7.82, 1.12, 3.77, 2.11),
    (9, 'ALL', 4.90, 1.86, 1.26, 0.59, 1.05, 0.23, 2.18, 1.62, 1.13, 0.47, 1.00, 0.01, 7.05, 1.34, 3.49, 1.90),
    (10, 'ALL', 4.95, 1.96, 1.16, 0.44, 1.11, 0.31, 1.42, 0.98, 1.00, 0.01, 1.08, 0.36, 6.97, 1.51, 3.38, 1.99),
    (11, 'ALL', 5.10, 1.48, 1.45, 0.95, 1.05, 0.23, 1.39, 0.82, 1.03, 0.16, 1.00, 0.01, 7.23, 1.16, 3.87, 2.19),
    (12, 'ALL', 5.23, 1.63, 1.39, 0.82, 1.03, 0.16, 1.32, 0.74, 1.05, 0.23, 1.08, 0.27, 7.26, 1.23, 3.72, 2.16),
    (13, 'ALL', 1.14, 0.42, 2.31, 1.79, 4.05, 1.86, 2.62, 1.79, 3.10, 2.33, 4.23, 1.86, 2.49, 1.30, 4.85, 2.11),
    (14, 'ALL', 5.07, 1.80, 1.00, 0.01, 1.02, 0.15, 1.58, 0.96, 1.07, 0.34, 1.00, 0.01, 7.00, 1.49, 3.52, 2.02),
    (15, 'ALL', 4.44, 1.77, 1.03, 0.16, 1.00, 0.01, 1.14, 0.35, 1.03, 0.16, 1.03, 0.16, 6.87, 1.22, 2.79, 1.95),
    (16, 'ALL', 1.00, 0.01, 3.66, 2.23, 4.66, 2.19, 3.68, 2.20, 4.59, 2.14, 3.44, 2.16, 1.80, 1.12, 5.54, 2.54),
    (17, 'ALL', 1.16, 0.37, 2.28, 1.69, 3.87, 1.64, 1.79, 1.44, 1.58, 1.22, 1.82, 1.33, 3.28, 1.36, 3.64, 2.10),
    (18, 'ALL', 1.03, 0.16, 3.15, 2.21, 5.49, 1.60, 2.62, 1.86, 2.69, 1.75, 2.92, 1.98, 2.05, 1.19, 5.21, 2.14),
    (19, 'ALL', 3.07, 1.84, 1.08, 0.27, 1.12, 0.33, 1.43, 0.71, 1.00, 0.01, 1.00, 0.01, 5.85, 0.86, 1.85, 1.33),
    (20, 'ALL', 1.13, 0.47, 2.69, 1.95, 4.72, 1.75, 2.56, 1.98, 1.72, 1.43, 2.72, 2.09, 2.58, 1.35, 4.72, 2.21),
    (21, 'ALL', 1.26, 0.59, 2.51, 1.97, 4.44, 1.55, 2.59, 1.87, 2.44, 1.98, 2.38, 1.77, 2.89, 1.18, 4.23, 1.87),
    (22, 'ALL', 1.00, 0.01, 3.77, 2.26, 4.92, 2.01, 5.03, 1.90, 4.69, 1.81, 2.33, 1.74, 1.79, 1.03, 6.31, 1.79), 
    (23, 'ALL', 1.19, 0.59, 3.34, 1.55, 4.27, 1.86, 2.34, 1.58, 2.16, 1.78, 3.43, 1.84, 2.84, 1.29, 4.20, 1.84), 
    (24, 'ALL', 1.00, 0.01, 2.15, 1.55, 3.97, 1.88, 1.79, 1.26, 4.05, 1.99, 4.56, 1.73, 2.56, 1.14, 4.38, 2.24), 
    (25, 'ALL', 5.27, 1.66, 1.05, 0.22, 1.12, 0.33, 1.44, 0.91, 1.00, 0.01, 1.02, 0.15, 7.16, 1.38, 3.52, 2.26), 
    (26, 'ALL', 1.00, 0.01, 1.38, 1.09, 3.29, 1.95, 2.03, 1.42, 4.20, 2.09, 4.20, 2.09, 2.73, 1.30, 3.90, 2.33), 
    (27, 'ALL', 5.51, 1.54, 1.18, 0.51, 1.00, 0.01, 1.74, 1.52, 1.00, 0.01, 1.00, 0.01, 7.38, 1.11, 4.15, 2.15), 
    (28, 'ALL', 4.56, 1.87, 1.05, 0.23, 1.00, 0.01, 1.74, 1.25, 1.00, 0.01, 1.03, 0.16, 7.21, 1.28, 3.41, 2.26), 
    (29, 'ALL', 4.82, 1.93, 1.08, 0.27, 1.05, 0.23, 1.90, 1.70, 1.00, 0.01, 1.11, 0.39, 7.00, 1.82, 3.92, 2.49),
    (30, 'ALL', 1.05, 0.22, 1.62, 1.15, 1.47, 0.96, 2.12, 1.42, 4.32, 2.02, 1.60, 1.14, 3.73, 1.23, 3.34, 1.99), 
    (31, 'ALL', 1.33, 0.84, 1.59, 1.00, 2.20, 1.46, 1.75, 1.20, 3.43, 1.68, 1.59, 1.15, 4.07, 1.13, 2.50, 1.42),
    (32, 'ALL', 3.12, 1.58, 1.05, 0.22, 1.05, 0.22, 1.63, 0.97, 1.00, 0.01, 1.00, 0.01, 6.02, 1.13, 2.10, 1.41), 
    (33, 'ALL', 1.50, 0.95, 1.16, 0.55, 1.24, 0.68, 1.16, 0.44, 1.03, 0.16, 1.13, 0.47, 5.11, 0.74, 1.64, 1.14), 
    (34, 'ALL', 1.00, 0.01, 3.02, 1.89, 3.51, 1.76, 2.12, 1.54, 1.33, 0.69, 1.98, 1.33, 3.17, 1.14, 3.56, 2.12), 
    (35, 'ALL', 1.10, 0.30, 1.74, 1.04, 2.14, 1.46, 1.66, 0.96, 3.39, 1.91, 1.95, 1.46, 3.70, 1.21, 3.30, 2.06),
    (36, 'ALL', 5.03, 1.55, 1.14, 0.42, 1.08, 0.27, 1.38, 0.86, 1.03, 0.16, 1.03, 0.16, 6.82, 1.54, 3.67, 2.18), 
    (37, 'ALL', 1.00, 0.01, 3.00, 1.92, 4.77, 1.71, 2.70, 1.92, 3.32, 1.93, 2.57, 2.02, 2.66, 1.12, 4.86, 2.18), 
    (38, 'ALL', 1.82, 1.39, 1.07, 0.26, 1.52, 0.93, 1.44, 0.83, 1.26, 0.50, 1.10, 0.30, 4.91, 0.48, 1.57, 1.02), 
    (39, 'ALL', 5.09, 1.80, 1.29, 0.60, 1.10, 0.37, 1.93, 1.35, 1.00, 0.01, 1.10, 0.01, 7.11, 1.51, 4.00, 2.29),
    (40, 'ALL', 5.00, 1.54, 1.59, 0.91, 1.05, 0.23, 2.13, 1.69, 1.00, 0.01, 1.10, 0.01, 7.46, 1.10, 4.28, 2.15), 
    (41, 'ALL', 1.00, 0.01, 2.76, 1.73, 4.05, 2.20, 2.78, 1.80, 4.39, 1.93, 2.17, 1.70, 2.46, 1.25, 4.29, 2.10);
`;

let table_names = [
    "category",
    "vh",
    "image",
    "imageMetadata",
    "emotion",
    "emotion_with_BE"
]

let tables = [
    sql_create_category,
    sql_create_vh,
    sql_create_image,
    sql_create_imageMetadata,
    sql_create_emotion, 
    sql_create_emotion_with_BE
];

let table_data = [
    sql_insert_category,
    sql_insert_vh,
    sql_insert_image,
    sql_insert_imageMetadata,
    sql_insert_emotion,  
    sql_insert_emotion_with_BE
]

let indexes = [
    sql_create_category_id_index,
    sql_create_image_id_index,
    sql_create_imageMetadata_id_index, 
    sql_create_emotion_with_BE_id_index,
    sql_create_emotion_id_index
];

if ((tables.length != table_data.length) || (tables.length != table_names.length)) {
    console.log("tables, names and data arrays length mismatch.")
    return
}

(async () => {
    console.log("Creating and populating tables");
    for (let i = 0; i < tables.length; i++) {
        console.log("Creating table " + table_names[i] + ".");
        try {
            await pool.query(tables[i], [])
            console.log("Table " + table_names[i] + " created.");
            if (table_data[i] !== undefined) {
                try {
                    await pool.query(table_data[i], [])
                    console.log("Table " + table_names[i] + " populated with data.");
                } catch (err) {
                    console.log("Error populating table " + table_names[i] + " with data.")
                    return console.log(err.message);
                }
            }
        } catch (err) {
            console.log("Error creating table " + table_names[i])
            return console.log(err.message);
        }
    }

    console.log("Creating indexes");
    for (let i = 0; i < indexes.length; i++) {
        try {
            await pool.query(indexes[i], [])
            console.log("Index " + i + " created.")
        } catch (err) {
            console.log("Error creating index " + i + ".")
        }
    }
})()





