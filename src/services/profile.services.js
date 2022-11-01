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

module.exports = {
  createProfile,
}