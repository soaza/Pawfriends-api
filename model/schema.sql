CREATE TABLE database_dogs(
    dog_id INTEGER PRIMARY KEY,
    dog_name TEXT,
    dog_gender TEXT,
    dog_age INTEGER
);

CREATE TABLE database_dog_image(
    image_id INTEGER,
    image_url TEXT,
    dog_id INTEGER,
    FOREIGN KEY(dog_id) REFERENCES database_dogs(dog_id),
    PRIMARY KEY(image_id,dog_id)
);