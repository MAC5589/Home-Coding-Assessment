# Home Coding Assessment - Login Test Automation

## Overview:

This project is test automation suite framework built with **Playwright + TypeScript**. It includes both **UI tests** and **API tests** to validate login functionality across different scenarios.
---

## Prerequisites:

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

**Verify installation:**
```bash
node --version
npm --version
```

---

## Installation:

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/MAC5589/Home-Coding-Assessment.git
   cd Home-Coding-Assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify Playwright installation**
   ```bash
   npx playwright --version
   ```

----------------

## Running Tests:

### Run All Tests
```bash
npm test
```

### Run Tests in a Specific Directory
```bash
npm test -- tests/ui/
npm test -- tests/api/
```

### Run a Specific Test File
```bash
npm test -- tests/ui/loginapp-login.spec.ts
```

### Run Tests Matching a Pattern
```bash
npm test -- --grep "Happy path"
```

### Run Tests in a Specific Browser
```bash
npm test -- --project=firefox
npm test -- --project=chromium
npm test -- --project=webkit
```

### Run Tests with Debug Mode
```bash
npx playwright test --debug
```

---

## View Test Reports:

After running tests, Playwright automatically generates a report:

### Open Report
```bash
npx playwright show-report
```
---

## Environment Configuration:

The environment variables fare managed via `.env` file.

Example: 
```
PROD_URL=https://the-internet.herokuapp.com
```


---

## Project Structure:

```
Home-Coding-Assessment/
├── .env                          
├── .gitignore                    
├── package.json                  
├── playwright.config.ts          
├── README.md                     
│
├── pages/                        
│   ├── login.pages.ts           
│   ├── login-api.page.ts        
│   └── secure-area.page.ts      
│
├── data/                         
│   └── users.json               
│
├── tests/
│   ├── ui/                      
│   │   ├── loginapp-login.spec.ts
│   │   └── loginapp-invalidtoken.spec.ts
│   │
│   ├── api/                    
│   │   └── loingapp-api.spec.ts
│   │
│   └── utils/                   
│       └── baseUrl.ts           
│
└── playwright-report/           
```


## Key Features

1. Page Object Model
2. Parameterized Tests
3. Centralized Test Data
4. Environment Configuration
6. API Testing

---

## Future Enhancements

### Planned Features
1. Visual Regression Testing
2. Performance Testing
3. Database Integration
4. CI/CD Integration
5. Accessibility Testing
6. Load Testing
7. Test Retry Logic

---
This framework demonstrates scalable automation architecture aligned
with modern practices.
