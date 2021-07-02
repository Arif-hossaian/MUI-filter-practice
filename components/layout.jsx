import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import FilterPanel from "./FilterPanle/FilterPanel";
import PlaceList from "./PlaceList/List";
import { Container, Grid } from "@material-ui/core";
import { dataList } from "./constants/data";

const Layout = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState();
  const [resultsFound, setResultsFound] = useState(true);
  const [cusineOptions, setCusineOptions] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chines",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);
  const handleChangeChecked = (id) => {
    const cusisesStateList = cusineOptions;
    const changeCheckCuisies = cusisesStateList.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setCusineOptions(changeCheckCuisies);
  };
  const handleChangePrice = (event, value) => setSelectedPrice(value);
  const applyFilters = () => {
    let updatedList = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    //Category filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    //Cusine checkbox
    const cuisinesChecked = cusineOptions
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }
    //price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
    //Search Input
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);
  };

  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedRating,
    selectedCategory,
    cusineOptions,
    selectedPrice,
    inputSearch,
  ]);

  return (
    <>
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FilterPanel
              selectToggle={handleSelectCategory}
              selectedCategory={selectedCategory}
              selectedRating={selectedRating}
              selectRating={handleSelectRating}
              cusineOptions={cusineOptions}
              changeChecked={handleChangeChecked}
              selectedPrice={selectedPrice}
              changedPrice={handleChangePrice}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <PlaceList list={list} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Layout;
