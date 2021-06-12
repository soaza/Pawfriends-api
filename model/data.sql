INSERT INTO database_dogs VALUES (1,'Hugo','Male',null,'I am friendly and love walks!'); 
INSERT INTO database_dogs VALUES (2,'Lucky','Male',null,'I am playful!'); 
INSERT INTO database_dogs VALUES (3,'Rambo','Male',null,'I love Junie!'); 
INSERT INTO database_dogs VALUES (4,'Junie','Female',null,'I love Rambo!'); 
INSERT INTO database_dogs VALUES (5,'Baby Girl','Female',null,null); 
INSERT INTO database_dogs VALUES (6,'Spotty','Male',null,null); 



INSERT INTO database_cms_account VALUES ('pawfriends_admin','maple123');
INSERT INTO database_cms_account VALUES ('pawfriends_exco','ilovelucky123');


INSERT INTO database_exco VALUES(2,'Ziheng',3,'Dogs!','Spotty','Vice-Project Director');	
INSERT INTO database_exco VALUES(6,'Yuanxin',3,'Dogs!','Lucky','Publicity');	
INSERT INTO database_exco VALUES(5,'Sandhya',3,'Dogs!','Lucky','Secretary');	
INSERT INTO database_exco VALUES(3,'Augustus',2,'Dogs!','Lucky','Secretary');	
INSERT INTO database_exco VALUES(4,'Kim Guan',2,'Building websites,video games, hiking!','Hugo','Publicity');	
INSERT INTO database_exco VALUES(1,'Huimin',3,'Dogs!','Spotty','Project Director');	

INSERT INTO database_main_page VALUES('  <p>
              Hi we are NUS Pawfriends! NUS Pawfriends is a student volunteer
              group under NUS PEACE. We aim to improve the welfare of the
              shelter dog community 🐶.
            </p>
            <p>
              We volunteer at the animal lodge at Choa Chu Kang, where we visit
              the shelter dogs weekly to walk them,bathe them as well as clean
              their kennels.
            </p>
            <p>
              Interested to join us in the upcoming semester?
              Contact Us and let us know your interest!
            </p>');

INSERT INTO database_activity_posts VALUES (DEFAULT,null,'We walked Hugo today!');
INSERT INTO database_activity_posts VALUES (DEFAULT,null,'We walked Lucky today!');
INSERT INTO database_activity_posts VALUES (DEFAULT,current_timestamp,'We walked Rambo today!');

INSERT INTO database_dog_image VALUES (2,'https://pawfriends-images-host.s3.amazonaws.com/Images/1622902717034.png',1,0);	
INSERT INTO database_dog_image VALUES (3,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1622902798337.jpg',1,0);	
INSERT INTO database_dog_image VALUES (10,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1623326395438.jpg',1,0);	
INSERT INTO database_dog_image VALUES (8,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1623065719833.jpg',1,1);
INSERT INTO database_dog_image VALUES (11,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1623329080997.jpg',1,0);	
INSERT INTO database_dog_image VALUES (12,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1623330001223.jpg',1,3);	
INSERT INTO database_dog_image VALUES (13,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1623330080266.jpg',1,2);	
INSERT INTO database_dog_image VALUES (7,'https://pawfriends-images-host.s3.amazonaws.com/Images/1623065443594.jpg',1,0);
INSERT INTO database_dog_image VALUES (9,'https://pawfriends-images-host.s3.amazonaws.com/Images/1623326335123.jpg',1,0);
INSERT INTO database_dog_image VALUES (4,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1622903254327.jpg',2,0);	
INSERT INTO database_dog_image VALUES (14,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1623338419171.jpg',2,1);	
INSERT INTO database_dog_image VALUES (5,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1622903320465.jpg',3,0);	
INSERT INTO database_dog_image VALUES (15,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1623338469204.jpg',3,1);	
INSERT INTO database_dog_image VALUES (6,'https://pawfriends-images-host.s3.ap-southeast-1.amazonaws.com/Images/1622903333112.jpg',4,0);