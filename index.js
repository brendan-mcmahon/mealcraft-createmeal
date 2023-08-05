exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      throw new Error('Invalid HTTP Method. Only POST requests are supported.');
    }
    
    const requestBody = JSON.parse(event.body);
    const meal = requestBody.meal;
    
    // TODO: Add your meal creation logic here
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Meal created successfully' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred while creating the meal' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'OPTIONS,POST',
        'Content-Type': 'application/json'
      }
    };
  }
};
