-- Create the database
CREATE DATABASE MovieDB;

-- Use the database
USE MovieDB;

-- Create the Movies table with TrailerURL
CREATE TABLE Movies (
    MovieID INT PRIMARY KEY,
    Title VARCHAR(255),
    Genre VARCHAR(100),
    ReleaseDate DATE,
    Duration INT,
    Rating DECIMAL(3, 1),
    Image VARCHAR(255),
    TrailerURL VARCHAR(255),
    Cast VARCHAR(255),
    Description VARCHAR(255)
);

-- Create the Theaters table
CREATE TABLE Theaters (
    TheaterID INT PRIMARY KEY,
    Name VARCHAR(255),
    Location VARCHAR(255)
);

-- Create the Showtimes table
CREATE TABLE Showtimes (
    ShowtimeID INT PRIMARY KEY,
    MovieID INT,
    TheaterID INT,
    ShowDateTime DATETIME,
    FOREIGN KEY (MovieID) REFERENCES Movies(MovieID),
    FOREIGN KEY (TheaterID) REFERENCES Theaters(TheaterID)
);

-- Create the Bookings table
CREATE TABLE Bookings (
    BookingID INT PRIMARY KEY,
    UserID INT,
    ShowtimeID INT,
    Seats INT,
    BookingDateTime DATETIME,
    FOREIGN KEY (ShowtimeID) REFERENCES Showtimes(ShowtimeID)
);

-- Create the Users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    UserName VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255)
);

-- Insert sample movies
INSERT INTO
    Movies (
        MovieID,
        Title,
        Genre,
        ReleaseDate,
        Duration,
        Rating,
        Image,
        TrailerURL,
        Cast,
        Description
    )
VALUES
    (
        1,
        'Dune: Part Two',
        'Sci-Fi',
        '2024-03-01',
        155,
        8.6,
        'movie_1.jpg',
        'Way9Dexny3w',
        'Timothée Chalamet, Zendaya, Rebecca Ferguson',
        'Phần hai của bộ phim viễn tưởng nổi tiếng "Dune", tiếp tục câu chuyện về Paul Atreides.'
    ),
    (
        2,
        'The Brutalist',
        'Drama',
        '2024-12-20',
        140,
        7.8,
        'movie_2.jpg',
        'GdRXPAHIEW4',
        'Adrien Brody, Felicity Jones, Guy Pearce',
        'Bộ phim chính kịch về sự đấu tranh và đổi mới kiến trúc giữa thế kỷ 20.'
    ),
    (
        3,
        'Ghostlight',
        'Comedy',
        '2024-06-14',
        100,
        7.5,
        'movie_3.jpg',
        'R1TycuGX4Mw',
        'Tony Hale, Ana Gasteyer, Steve Zahn',
        'Một bộ phim hài xoay quanh cuộc sống của những người làm việc trong nhà hát.'
    ),
    (
        4,
        'Nosferatu',
        'Horror',
        '2024-12-25',
        110,
        8.1,
        'movie_4.jpg',
        'nulvWqYUM8k',
        'Anya Taylor-Joy, Bill Skarsgård, Willem Dafoe',
        'Bản làm lại của bộ phim kinh điển về ma cà rồng "Nosferatu".'
    ),
    (
        5,
        'The Wild Robot',
        'Animation',
        '2024-09-27',
        95,
        8.2,
        'movie_5.jpg',
        '67vbA5ZJdKQ',
        'Scarlett Johansson, Taron Egerton, Ben Whishaw',
        'Một bộ phim hoạt hình về cuộc hành trình của một con robot hoang dã.'
    ),
    (
        6,
        'Furiosa: A Mad Max Saga',
        'Action',
        '2024-05-24',
        130,
        8.0,
        'movie_6.jpg',
        'XJMuhwVlca4',
        'Anya Taylor-Joy, Chris Hemsworth, Yahya Abdul-Mateen II',
        'Phần tiếp theo của bộ phim hành động "Mad Max", tập trung vào nhân vật Furiosa.'
    ),
    (
        7,
        'The Substance',
        'Horror',
        '2024-09-20',
        105,
        7.4,
        'movie_7.jpg',
        'xRd1KZZ76_o',
        'Demi Moore, Margaret Qualley, Ray Liotta',
        'Một bộ phim kinh dị xoay quanh sự xuất hiện của một chất lạ gây ra những hiện tượng kỳ bí.'
    ),
    (
        8,
        'A Real Pain',
        'Comedy',
        '2024-11-01',
        90,
        7.3,
        'movie_8.jpg',
        'b2et8Vpu7Ls',
        'Nathan Fielder, Emma Stone, Jonah Hill',
        'Một bộ phim hài về những tình huống dở khóc dở cười trong cuộc sống.'
    ),
    (
        9,
        'Inside Out 2',
        'Animation',
        '2024-06-14',
        95,
        8.5,
        'movie_9.jpg',
        'LEjhY15eCx0',
        'Amy Poehler, Bill Hader, Mindy Kaling',
        'Phần hai của bộ phim hoạt hình "Inside Out", tiếp tục khám phá cảm xúc bên trong của cô bé Riley.'
    ),
    (
        10,
        'Captain America: Brave New World',
        'Action',
        '2025-02-14',
        130,
        8.4,
        'movie_10.jpg',
        '1pHDWnXmK7Y',
        'Anthony Mackie, Sebastian Stan, Emily VanCamp',
        'Phần tiếp theo của loạt phim "Captain America", kể về hành trình mới của Sam Wilson với vai trò Captain America.'
    ),
    (
        11,
        'Guardians of the Galaxy Vol. 3',
        'Action',
        '2024-05-05',
        149,
        8.3,
        'movie_11.jpg',
        'u3V5KDHRQvk',
        'Chris Pratt, Zoe Saldana, Dave Bautista',
        'Phần ba của loạt phim siêu anh hùng "Guardians of the Galaxy".'
    ),
    (
        12,
        'The Batman: Arkham',
        'Action',
        '2024-10-31',
        160,
        8.7,
        'movie_12.jpg',
        'wsf78BS9VE0',
        'Robert Pattinson, Zoë Kravitz, Colin Farrell',
        'Một phần mới trong loạt phim "The Batman", tập trung vào cuộc đối đầu với thế lực tội phạm trong Arkham.'
    ),
    (
        13,
        'Fantastic Beasts: The Blue Flame',
        'Fantasy',
        '2025-07-15',
        142,
        7.9,
        'movie_13.jpg',
        'by_gr6oC9Fg',
        'Eddie Redmayne, Katherine Waterston, Jude Law',
        'Phần tiếp theo của loạt phim "Fantastic Beasts", với cuộc phiêu lưu mới.'
    ),
    (
        14,
        'Mission: Impossible - Dead Reckoning Part Two',
        'Action',
        '2025-08-22',
        145,
        8.5,
        'movie_14.jpg',
        'NOhDyUmT9z0',
        'Tom Cruise, Rebecca Ferguson, Simon Pegg',
        'Phần hai của bộ phim hành động "Mission: Impossible - Dead Reckoning".'
    ),
    (
        15,
        'The Meg 2: The Trench',
        'Sci-Fi',
        '2024-08-09',
        116,
        7.1,
        'movie_15.jpg',
        'dG91B3hHyY4',
        'Jason Statham, Li Bingbing, Ruby Rose',
        'Phần hai của bộ phim khoa học viễn tưởng "The Meg".'
    ),
    (
        16,
        'Avatar: The Way of Water',
        'Fantasy',
        '2024-12-17',
        190,
        8.9,
        'movie_16.jpg',
        'a8Gx8wiNbs8',
        'Sam Worthington, Zoe Saldana, Sigourney Weaver',
        'Phần tiếp theo của bộ phim "Avatar", tiếp tục câu chuyện về Pandora.'
    ),
    (
        17,
        'Joker: Folie à Deux',
        'Drama',
        '2025-10-04',
        130,
        8.8,
        'movie_17.jpg',
        '_OKAwz2MsJs',
        'Joaquin Phoenix, Lady Gaga, Zazie Beetz',
        'Phần tiếp theo của bộ phim "Joker", khám phá thêm về sự điên rồ của nhân vật chính.'
    ),
    (
        18,
        'Spider-Man: Beyond the Spider-Verse',
        'Animation',
        '2024-04-08',
        120,
        8.9,
        'movie_18.jpg',
        'D7pQ-S8QlC8',
        'Shameik Moore, Hailee Steinfeld, Mahershala Ali',
        'Phần tiếp theo của bộ phim hoạt hình "Spider-Man: Into the Spider-Verse".'
    ),
    (
        19,
        'Black Panther: Wakanda Forever',
        'Action',
        '2024-11-10',
        150,
        8.6,
        'movie_19.jpg',
        '_Z3QKkl1WyM',
        'Letitia Wright, Winston Duke, Angela Bassett',
        'Phần tiếp theo của bộ phim siêu anh hùng "Black Panther".'
    ),
    (
        20,
        'John Wick: Chapter 5',
        'Action',
        '2025-03-21',
        135,
        8.7,
        'movie_20.jpg',
        'zv3NDaFqjIc',
        'Keanu Reeves, Laurence Fishburne, Ian McShane',
        'Phần tiếp theo của loạt phim hành động "John Wick".'
    );

-- Insert sample theaters
INSERT INTO
    Theaters (TheaterID, Name, Location)
VALUES
    (
        1,
        'Grand Cinema Downtown',
        '123 Main St, Ho Chi Minh City'
    ),
    (
        2,
        'Sunshine Cinema',
        '456 Sunshine Ave, Ho Chi Minh City'
    ),
    (
        3,
        'Starlight Theater',
        '789 Star Rd, Ho Chi Minh City'
    );

-- Insert sample showtimes
INSERT INTO
    Showtimes (ShowtimeID, MovieID, TheaterID, ShowDateTime)
VALUES
    (1, 1, 1, '2025-04-10 18:30:00'),
    (2, 2, 2, '2025-04-11 19:00:00'),
    (3, 3, 1, '2025-04-12 20:00:00'),
    (4, 4, 2, '2025-04-13 17:30:00'),
    (5, 5, 3, '2025-04-14 18:00:00'),
    (6, 6, 1, '2025-04-15 21:00:00'),
    (7, 7, 2, '2025-04-16 19:30:00'),
    (8, 8, 3, '2025-04-17 20:30:00'),
    (9, 9, 1, '2025-04-18 18:45:00'),
    (10, 10, 2, '2025-04-19 17:15:00'),
    (11, 11, 3, '2025-04-20 19:00:00'),
    (12, 12, 1, '2025-04-21 20:00:00'),
    (13, 13, 2, '2025-04-22 18:30:00'),
    (14, 14, 3, '2025-04-23 19:45:00'),
    (15, 15, 1, '2025-04-24 21:00:00'),
    (16, 16, 2, '2025-04-25 20:15:00'),
    (17, 17, 3, '2025-04-26 18:45:00'),
    (18, 18, 1, '2025-04-27 19:30:00'),
    (19, 19, 2, '2025-04-28 20:00:00'),
    (20, 20, 3, '2025-04-29 21:15:00');

-- Insert sample bookings
INSERT INTO
    Bookings (
        BookingID,
        UserID,
        ShowtimeID,
        Seats,
        BookingDateTime
    )
VALUES
    (1, 1, 1, 2, '2025-04-01 10:00:00'),
    (2, 2, 2, 3, '2025-04-02 15:00:00'),
    (3, 1, 3, 1, '2025-04-05 12:00:00'),
    (4, 2, 4, 4, '2025-04-06 14:00:00'),
    (5, 3, 5, 2, '2025-04-07 16:00:00'),
    (6, 1, 6, 5, '2025-04-08 18:00:00'),
    (7, 3, 7, 3, '2025-04-09 20:00:00'),
    (8, 2, 8, 2, '2025-04-10 13:00:00'),
    (9, 1, 9, 1, '2025-04-11 11:00:00'),
    (10, 3, 10, 4, '2025-04-12 17:00:00');

-- Insert sample users
INSERT INTO
    Users (UserID, UserName, Email, Password)
VALUES
    (
        1,
        'JohnDoe',
        'john@example.com',
        '123'
    ),
    (
        2,
        'JaneSmith',
        'jane@example.com',
        '123'
    ),
    (
        3,
        'EmilyJones',
        'emily@example.com',
        '123'
    );

ALTER TABLE
    Movies
ADD
    COLUMN Price INT;

UPDATE
    Movies
SET
    Price = CASE
        WHEN MovieID = 1 THEN 70000
        WHEN MovieID = 2 THEN 60000
        WHEN MovieID = 3 THEN 45000
        WHEN MovieID = 4 THEN 80000
        WHEN MovieID = 5 THEN 40000
        WHEN MovieID = 6 THEN 78000
        WHEN MovieID = 7 THEN 52000
        WHEN MovieID = 8 THEN 47000
        WHEN MovieID = 9 THEN 68000
        WHEN MovieID = 10 THEN 75000
        WHEN MovieID = 11 THEN 62000
        WHEN MovieID = 12 THEN 76000
        WHEN MovieID = 13 THEN 58000
        WHEN MovieID = 14 THEN 77000
        WHEN MovieID = 15 THEN 44000
        WHEN MovieID = 16 THEN 80000
        WHEN MovieID = 17 THEN 78000
        WHEN MovieID = 18 THEN 69000
        WHEN MovieID = 19 THEN 73000
        WHEN MovieID = 20 THEN 71000
    END;

ALTER TABLE
    Bookings
MODIFY
    BookingID INT AUTO_INCREMENT;

CREATE TABLE Admins (
    AdminID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255),
    Password VARCHAR(255)
);

INSERT INTO
    Admins (Username, Password)
VALUES
    ('admin1', '123'),
    ('admin2', '123'),
    ('admin3', '123');

ALTER TABLE
    Users
MODIFY
    UserID INT AUTO_INCREMENT;

ALTER TABLE
    Admins
MODIFY
    AdminID INT AUTO_INCREMENT;

ALTER TABLE
    Movies
MODIFY
    MovieID INT AUTO_INCREMENT;

ALTER TABLE
    Theaters
MODIFY
    TheaterID INT AUTO_INCREMENT;

ALTER TABLE
    Showtimes
MODIFY
    ShowtimeID INT AUTO_INCREMENT;