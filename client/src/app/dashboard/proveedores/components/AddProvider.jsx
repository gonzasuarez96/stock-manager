const AddProviderButton = () => {
  return (
    <button
      className="flex items-center rounded-full bg-yellowBg p-2 px-4 font-medium shadow-md hover:bg-hoverYellow"
      // onClick={handleAddItem}
      style={{
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
      }}
    >
      Añadir proveedor
    </button>
  );
};

export default AddProviderButton;
