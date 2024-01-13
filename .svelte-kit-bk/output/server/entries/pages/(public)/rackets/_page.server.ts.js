const load = async ({ locals }) => {
  const rackets = await locals.db.query.rackets.findMany({
    with: {
      brand: true
    }
  });
  return {
    rackets
  };
};
export {
  load
};
