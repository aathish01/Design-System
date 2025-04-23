
export const colors = {
    primary: '#007bff',
    secondary: '#6c757d',
    tertiary: '#28a745',
    neutral: {
        light: '#f8f9fa',
        dark: '#343a40',
        border: '#ced4da',
    },
    semantic: {
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        error: '#dc3545',
    },
    background: {
        light: '#ffffff',
        dark: '#212529',
    },
};


export const getTheme = (isDarkMode: boolean) => ({
    colors: {
        ...colors,
        background: isDarkMode ? colors.background.dark : colors.background.light,
    },
});