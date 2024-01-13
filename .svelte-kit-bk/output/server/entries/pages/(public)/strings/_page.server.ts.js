const load = async ({ locals }) => {
  const strings = await locals.db.query.strings.findMany({ with: { brand: true, reviews: true } });
  return {
    strings
  };
};
export {
  load
};
