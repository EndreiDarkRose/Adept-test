const generateFakeCompanies = (count: number) => {
  const companies = [];
  for (let i = 1; i <= count; i++) {
    companies.push({
      id: i,
      name: `Company ${i}`,
      address: `Address ${i}`,
      selected: false,
    });
  }
  return companies;
};

const initialCompanies = generateFakeCompanies(10000);

export default initialCompanies;
