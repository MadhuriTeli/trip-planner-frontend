import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import Link from "@mui/material/Link";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
const API_URL = "http://localhost:8080/hotels/";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        TripPlanner
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const mdTheme = createTheme();

const SingleHotel = () => {
  const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
  };

  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = initialState();

  //   useEffect(() => {
  //     fetchSingleProduct(`${url}${id}`);
  //     // eslint-disable-next-line
  //   }, [id]);
  //   useEffect(() => {
  //     if (error) {
  //       setTimeout(() => {
  //         history.push("/");
  //       }, 3000);
  //     }
  //     // eslint-disable-next-line
  //   }, [error]);
  //   if (loading) {
  //     return `<h1>loading/h1>`;
  //   }
  //   if (error) {
  //     return `<h1>error/h1>`;
  //   }
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    const url = `${API_URL}${id}`;
    axios(url)
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        //setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const {
    title,
    image,
    description,
    address,
    city,
    contact_no,
    website,
    price,
  } = allData;

  return (
    <ThemeProvider theme={mdTheme}>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            //  flexGrow: 1,
            //height: "100vh",
            // overflow: "auto",
          }}
        >
          <h2 style={{ marginLeft: "20px" }}>About</h2>
          <Container sx={{ py: 1 }}>
            <main>
              <Wrapper>
                <div className="section section-center page">
                  <Link to="/hotels" className="btn">
                    back to products
                  </Link>
                  <div className="product-center">
                    <img src={image} alt={title} />
                    <section className="content">
                      <h2>{title}</h2>
                      <h5 className="price">{price}</h5>
                      <p className="desc">{description}</p>
                      <p className="desc">{address}</p>
                      <p className="desc">{city}</p>
                      <p className="desc">{contact_no}</p>
                      <p className="desc">{website}</p>
                      <p className="desc">{price}</p>
                      <hr />
                    </section>
                  </div>
                </div>
              </Wrapper>
            </main>
          </Container>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleHotel;
