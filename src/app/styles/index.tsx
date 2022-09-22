import GlobalStyles from 'shared/ui/global-styles';

const AppStyles = () => {
    return(
        <GlobalStyles
        styles={(theme) => ({
          body: {
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightLight,
            fontSize: theme.typography.fontSize,
            margin: theme.spacing(0)
          },
          '#root': {
            height: '100vh',
            widht: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.palette.grey[500]
          },
        })}
    />
    );
}

export default AppStyles;