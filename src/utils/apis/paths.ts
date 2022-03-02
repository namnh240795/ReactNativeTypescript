type Path = { [key: string]: string | Function };

const PATHS: Path = {
  // services
  DETAIL_WITH_ID_IN_API_PATH: (id: string) => `/xyz/${id}`,
  // general
  LISTING: '/abcd/xyz',
};

export default PATHS;
