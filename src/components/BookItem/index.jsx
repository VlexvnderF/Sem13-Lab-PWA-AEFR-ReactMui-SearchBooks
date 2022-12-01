import { Paper, Box, CardContent, CardMedia, Typography } from "@mui/material";

const BookItem = ({ book }) => {
  return (
    
    <Paper id="water"
     elevation={5} variant="outlined" square >
      <CardMedia 
        width={250}
                  
        component="img"
        image={book.volumeInfo?.imageLinks?.thumbnail}
        height={250}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent >
        <Box  >
        <Typography variant="h4" align="left">{book.volumeInfo.title}</Typography>
              <Typography variant="h6"align="left">{book.volumeInfo.authors}</Typography>
              <Typography variant="subtitle2"align="justify">{book.volumeInfo.description}</Typography>
        </Box>
      </CardContent>
      
    </Paper>
  
  );
};

export default BookItem;
