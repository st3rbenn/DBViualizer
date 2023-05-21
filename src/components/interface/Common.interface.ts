interface ICurrentDatabaseSelected {
  name: string;
  isSelected: ECurrentDatabaseSelected;
  tables: string[];
  isArrowClicked?: boolean;
}

enum ECurrentDatabaseSelected {
  NOT_SELECTED = 0,
  SELECTED = 1,
  SELECTED_AND_CURRENT = 2,
}

export { ICurrentDatabaseSelected, ECurrentDatabaseSelected };
