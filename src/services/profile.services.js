const db = require('../config/database');

//creating a profile
const createProfile = async (body) => {
  const { location_title, age, eat_type, experience, group_id, user_id } = body;

  //check user profile does not already exist
  const checkProfile = await db.query('SELECT * FROM profiles WHERE user_id = $1', [user_id]);
  if (checkProfile.rows.length > 0) {
    throw new Error('Profile already exists.');
  }

  //if not already a profile, create profile
  const createProfile = await db.query(
    'INSERT INTO "profiles" (location_title, age, eat_type, experience, group_id, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [location_title, age, eat_type, experience, group_id, user_id]
  );

  return createProfile.rows[0];
}


//updating a profile
const updateProfile = async (id, body) => {
  const { location_title, age, eat_type, experience, group_id } = body;

  //checking user profile exists
  const { rows } = await db.query('SELECT * FROM "profiles" WHERE id = $1', [id]);
  if (!rows[0]) {
    throw new Error('Invalid id')
  }

  const { rows: updateProfile } = await db.query(
    'UPDATE "profiles" SET location_title = $1, age = $2, eat_type = $3, experience = $4, group_id = $5 WHERE id = $6 RETURNING *',
    [location_title, age, eat_type, experience, group_id, id]
  );

  return updateProfile[0];
}

module.exports = {
  createProfile,
  updateProfile
}