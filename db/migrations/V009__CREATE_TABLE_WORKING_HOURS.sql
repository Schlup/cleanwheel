 CREATE TABLE working_hours (
     id SERIAL PRIMARY KEY,
     business_uuid UUID REFERENCES business(uuid),
     day_of_week_id INT REFERENCES day_of_week(id),
     opening_time TIME,
     closing_time TIME
 );