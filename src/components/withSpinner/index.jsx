import { CircularProgress } from "@mui/material";

const withSpinner = Component => ({ isLoading, ...otherProps }) => (
  isLoading ? (
    <CircularProgress />
  ) :
  (
    <Component {...otherProps}/>
  )
)

export default withSpinner;
