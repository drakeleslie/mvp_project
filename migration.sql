
DROP TABLE IF EXISTS exercises CASCADE; 
DROP TABLE IF EXISTS journal CASCADE;
DROP TABLE IF EXISTS ppl CASCADE;





CREATE TABLE ppl (
    id SERIAL PRIMARY KEY,
    kind TEXT NOT NULL,
    info TEXT NOT NULL
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    prime_movers TEXT,
    secondaries TEXT,
    suggested_freq TEXT,
    ppl_id INTEGER REFERENCES ppl(id)
);

CREATE TABLE journal (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL REFERENCES exercises(name),
    sets TEXT NOT NULL,
    reps TEXT NOT NULL,
    info TEXT NOT NULL
);

INSERT INTO ppl (kind, info) VALUES ('push', 'Pushing exercises, consist of mostly Chest, Tricep and Shoulder work.');
INSERT INTO ppl (kind, info) VALUES ('pull', 'Pulling exercises, consist of mostly Trap, Lat, Bicep and Rhomboid work.');
INSERT INTO ppl (kind, info) VALUES ('legs', 'Leg exercises, consist of mostly Quad, Glute, Calf and Hamstring work.');

INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Pec Deck', 'Pectoralis Major(chest)', 'Anterior deltoids(shoulders)', '2-3 times a week', 1);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Flat Barbell Benchpress', 'Pectoralis Major(chest)', 'Anterior deltoids(shoulders), Lateral head(tricep)', '2-3 times a week', 1);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Strict Military press', 'Anterior deltoids(shoulders)', 'Lateral head(tricep), Trapezius(upper back), Lumbar(lower back)', '1-2 times a week', 1);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Lateral Raise', 'Lateral deltoids(shoulders)', 'Anterior deltoids(shoulders)', '2-6 times a week', 1);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Tricep Pushdown', 'Lateral head(tricep)', 'Long head(tricep), Medial head(tricep)', '2-4 times a week', 1);

INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Pendlay Row', 'Middle Trapezius(inner back)', 'Latissimus Dorsi(lats), Rhomboids(upper back), Lumbar(lower back)', '1-2 times a week', 2);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Standing Cable Pullover ', 'Latissimus Dorsi(lats)', 'Rhomboids(upper back), Posterior Deltoid(upper back)', '1-2 times a week', 2);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Chin up', 'Latissiumus Dorsi(lats)', 'Biceps Brachii(Biceps), Teres Major(upper back), Rhomboids(upper back)', '2-6 times a week', 2);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Cable Bicep Curl', 'Biceps Brachii(biceps)', 'Brachialis(Biceps), Brachioradialis(Forearm)', '2-4 times a week', 2);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Below-the-knee Rack pull', 'Erector Spinae(inner back)', 'Trapezius(traps), Teres Major(upper back), Rhomboids(upper back), Latissimus Dorsi(lats)', '1-2 times a week', 2);

INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Leg Extension', 'Vastus Medialis(quads)', 'Rectus Femoris(hips), Vastus Lateralis(quads), and Vastus Intermedius(quads)', '1-2 times a week', 3);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Leg Curl', 'Bicep Femoris(hamstrings)', 'Semitendinosus(hamstrings), and Semimembranosus(hamstrings)', '1-2 times a week', 3);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('High-Bar Squat', 'Quads', 'Hamstrings, and Glutes', '2-3 times a week', 3);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Romanian Deadlift', 'Hamstrings', 'Glutes and Erector Spinae(posterior chain)', '1-2 times a week', 3);
INSERT INTO exercises (name, prime_movers, secondaries, suggested_freq, ppl_id) VALUES ('Hip Thrust', 'Glutes', 'Hamstrings, Core, Quads', '1-2 times a week', 3);

INSERT INTO journal (name, sets, reps, info) VALUES ('Leg Curl', '3', '16', 'failure')







