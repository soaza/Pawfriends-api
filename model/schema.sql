CREATE TABLE database_dogs(
    dog_id INTEGER PRIMARY KEY,
    dog_name TEXT,
    dog_gender TEXT,
    dog_age INTEGER
);

CREATE TABLE database_exco(
    exco_id INTEGER PRIMARY KEY,
    exco_name TEXT,
    exco_year_of_study INTEGER,
    exco_hobbies TEXT,
    exco_favourite_dog TEXT
);

CREATE TABLE database_dog_image(
    image_id INTEGER,
    image_url TEXT,
    dog_id INTEGER,
    FOREIGN KEY(dog_id) REFERENCES database_dogs(dog_id),
    PRIMARY KEY(image_id,dog_id)
);

CREATE TABLE database_cms_account(
    username TEXT PRIMARY KEY,
    user_password TEXT
);

CREATE TABLE database_main_page(
    pawfriends_description TEXT
);

CREATE TABLE database_activity_posts(
    date_posted DATE,
    activity_description TEXT
);