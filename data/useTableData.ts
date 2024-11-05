export const useTableData = () => {
  const headerItems = shallowRef([
    {
      label: "User ID",
      sortable: false,
      slug: "id",
    },
    {
      label: "Name of the User",
      sortable: true,
      slug: "name",
      isAsc: true,
    },
    {
      label: "Date of Registration",
      sortable: true,
      slug: "created_at",
      isAsc: true,
    },
    {
      label: "Address",
      sortable: false,
      slug: "address",
    },
    {
      label: "Phone Number",
      sortable: false,
      slug: "number",
    },
  ]);

  return { headerItems };
};
