import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { searchBooks } from "../../services";
import { BookItem } from "../../components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from "@mui/material/Typography";






const Books = () => {
  const [search, setSearch] = useState("");

  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    const books = await searchBooks(search);
    setBooks(books.items);
  };

  return (
    
    <Container maxWidth="md">
      <Box my={4}>
      <Typography variant="h3" gutterBottom>
        Buscar Libro
      </Typography>
          <Card >  
          <CardContent style={{backgroundColor: "#0288d1"}}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Buscar un libro"
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                size="small"
                variant="outlined"
              />
              <Box my={2}>
                <Button onClick={handleSearch} size="large" variant="contained">
                  Buscar
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
        
        
      </Box>
      <Box>
        <Grid container spacing={3} mt={3}>
            
                
                  {books.length > 0 &&
                  books.map((book, index) => ( 
                  
                  <Grid item xs={12} sm={6}>
                    <Card >  
                      <BookItem key={index} book={book} />
                    </Card>
                    
                    </Grid>
                    
          ))}
          
          </Grid>
      </Box>
    </Container>
  );
};


export default Books;
