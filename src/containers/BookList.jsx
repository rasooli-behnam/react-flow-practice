import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

import { selectBook } from "../actions/index";

import type { Dispatch } from "redux";

type Props = {
  classes: any,
  books: Array<Book>,
  selectBook: Function
};

class BookList extends Component<Props> {
  render() {
    const { classes, books, selectBook } = this.props;

    return (
      <Paper>
        <MenuList className={classes.menu}>
          {books.map(book => {
            return (
              <MenuItem
                key={book.title}
                button
                onClick={() => selectBook(book)}
              >
                {book.title}
              </MenuItem>
            );
          })}
        </MenuList>
      </Paper>
    );
  }
}

const styles = {
  menu: {
    width: "100%"
  }
};

const BookListWithStyles = withStyles(styles)(BookList);

const mapAppStateToProps = appState => ({
  books: appState.books
});

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  selectBook: book => dispatch(selectBook(book))
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(BookListWithStyles);
