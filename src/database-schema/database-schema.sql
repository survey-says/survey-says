-- Code to initially create and populate the sql database

--Make the schema
drop schema if exists survey_says cascade;
create schema survey_says;

set schema 'survey_says';

-----------------------
-- Create the tables --
-----------------------

create table survey_user
(
	user_id serial primary key,
	username varchar(20) not null unique,
	password text not null,
	first_name varchar(30) not null,
	last_name varchar(30) not null,
	email varchar(30) not null
);

create table survey
(	
	survey_id serial primary key,
	creator int not null,
	title text not null,
	description text not null,
	date_created date not null,
	closing_date date not null,
	status int not null,
	privacy int not null
);

create table survey_status
(
	status_id serial primary key,
	status varchar(10) not null unique
);

create table survey_privacy
(
	privacy_id serial primary key,
	privacy varchar(10) not null unique
);

create table survey_role
(
	role_id serial primary key,
	survey_role varchar(20) not null unique
);

create table role_junction
(
	junction_id serial primary key,
	survey int not null,
	survey_user int not null,
	survey_role int not null
);

create table question
(	
	question_id serial primary key,
	question_text text not null,
	survey int not null
);

create table answer_choice
(	
	choice_id serial primary key,
	answer_text text not null,
	question int not null
);

create table response
(	
	response_id serial primary key,
	question int not null,
	answer_chosen int not null
);

--------------------------
-- Add the foreign keys --
--------------------------

-- Link the roles to the junction table
alter table role_junction
add constraint fk_role 
foreign key (survey_role) references survey_role (role_id);

-- Link the surveys to the junction table
alter table role_junction
add constraint fk_survey_junction
foreign key (survey) references survey (survey_id);

-- Link the users to the junction table
alter table role_junction
add constraint fk_user_junction
foreign key (survey_user) references survey_user (user_id);


-- Link the creators to the surveys
alter table survey
add constraint fk_survey_creator 
foreign key (creator) references survey_user (user_id)
on delete cascade on update cascade;

-- Link the status to the surveys
alter table survey
add constraint fk_survey_status
foreign key (status) references survey_status (status_id)
on delete cascade on update cascade;

-- Link the privacy to the surveys
alter table survey
add constraint fk_survey_privacy
foreign key (privacy) references survey_privacy (privacy_id)
on delete cascade on update cascade;

-- Link the survey to the questions
alter table question
add constraint fk_survey_question
foreign key (survey) references survey (survey_id);

-- Link the question to the answer choices
alter table answer_choice
add constraint fk_answer_choice
foreign key (question) references question (question_id);

-- Link the question to the responses
alter table response
add constraint fk_response_to_question
foreign key (question) references question (question_id);

-- Link the answer_choice to the responses
alter table response
add constraint fk_response
foreign key (answer_chosen) references answer_choice (choice_id);

---------------------
-- Populate tables --
----------------------

insert into survey_role (survey_role) 
values ('creator');
insert into survey_role (survey_role) 
values ('moderator');
insert into survey_role (survey_role) 
values ('user');

insert into survey_status (status)
values ('Open');
insert into survey_status (status)
values ('Closed');

insert into survey_privacy (privacy)
values ('Public');
insert into survey_privacy (privacy)
values ('Private');


-- Add some users
insert into survey_user (username, password, first_name, last_name, email) 
values ('lori', 'pass55', 'Lori', 'Oliver', 'lori@surveysays.com');
insert into survey_user (username, password, first_name, last_name, email) 
values ('aaron', 'pass66', 'Aaron', 'Gravelle', 'aaron@surveysays.com');
insert into survey_user (username, password, first_name, last_name, email) 
values ('justin', 'pass22', 'Justin', 'Clark', 'justin@surveysays.com');
insert into survey_user (username, password, first_name, last_name, email) 
values ('iman', 'pass33', 'Iman', 'Davis-Young', 'iman@surveysays.com');
insert into survey_user (username, password, first_name, last_name, email) 
values ('hank', 'pass44', 'Hank', 'Zimmer', 'hank@surveysays.com');
insert into survey_user (username, password, first_name, last_name, email) 
values ('creator', 'creator', 'Survey', 'Creator', 'mod@surveysays.com');
insert into survey_user (username, password, first_name, last_name, email) 
values ('mod', 'mod', 'Survey','Moderator', 'mod@surveysays.com');

-- Add a survey
insert into survey (creator, title, description, date_created, closing_date, status, privacy)
values (5, 'What is your favorite cuisine?', 'A survey to determine the favorite foods of survey-takers', '2019/2/18', '2019/3/15', 1, 1);

-- Add a question to survey 1 (Favorite Food)
insert into question (question_text, survey)
values ('Of the following, what type of cuisine do your like the best?', 1);

-- Insert choices for question 1 (Favorite Food)
insert into answer_choice (answer_text, question)
values('Chinese', 1);
insert into answer_choice (answer_text, question)
values('Jamaican', 1); 
insert into answer_choice (answer_text, question)
values('Italian', 1);
insert into answer_choice (answer_text, question)
values('Mexican', 1);
insert into answer_choice (answer_text, question)
values('American', 1);
insert into answer_choice (answer_text, question)
values('Japanese', 1);
insert into answer_choice (answer_text, question)
values('Thai', 1);
insert into answer_choice (answer_text, question)
values('Indian', 1);
insert into answer_choice (answer_text, question)
values('Mediterranean', 1);

-- Insert responses for question 1 (Favorite Food)
insert into response (question, answer_chosen) 
values(1, 2);
insert into response (question, answer_chosen) 
values(1, 4);
insert into response (question, answer_chosen) 
values(1, 8);
insert into response (question, answer_chosen) 
values(1, 1);
insert into response (question, answer_chosen) 
values(1, 4);
insert into response (question, answer_chosen) 
values(1, 7);
insert into response (question, answer_chosen) 
values(1, 4);
insert into response (question, answer_chosen) 
values(1, 1);
insert into response (question, answer_chosen) 
values(1, 5);
insert into response (question, answer_chosen) 
values(1, 4);
insert into response (question, answer_chosen) 
values(1, 2);
insert into response (question, answer_chosen) 
values(1, 4);
insert into response (question, answer_chosen) 
values(1, 6);

-- Add the user-survey-roles
insert into role_junction (survey, survey_user, survey_role)
values(1, 6, 1);
insert into role_junction (survey, survey_user, survey_role)
values(1, 7, 2);