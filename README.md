# Synapx Claims Agent 🏢

An intelligent autonomous insurance claims processing system that leverages document parsing, field extraction, and AI-powered routing to streamline FNOL (First Notice of Loss) claim handling.

## Overview

Synapx Claims Agent is a modern web application designed to automate the initial assessment and routing of insurance claims. By uploading claim documents (PDF or Word), the system intelligently extracts relevant information, validates data completeness, and recommends optimal claim routing—dramatically reducing manual processing time and improving accuracy.

### Key Features

- **📄 Multi-Format Document Support**: Process PDF and Word documents seamlessly
- **🔍 Intelligent Field Extraction**: Automatically extracts policy information, incident details, involved parties, and asset information
- **✅ Smart Validation**: Identifies missing or incomplete fields for enhanced data quality
- **🎯 Auto Routing**: Intelligently recommends claim routes based on claim characteristics
- **📊 Structured Output**: Generate and download results as JSON for downstream system integration
- **⚡ Real-Time Processing**: Instant processing with smooth animations and user feedback
- **🎨 Modern UI**: Responsive, accessible interface built with Tailwind CSS and Framer Motion

## Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd synapx-claims-agent

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will open at `http://localhost:5173` with hot module reloading enabled.

### Production Build

```bash
# Build for production
npm build

# Preview the production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── extraction/
│   │   ├── AllDetails.jsx           # Displays all extracted fields
│   │   ├── ExtractedFields.jsx       # Formatted extracted data view
│   │   └── MissingFields.jsx         # Lists validation failures
│   ├── output/
│   │   └── JsonOutput.jsx            # JSON result viewer and downloader
│   ├── routing/
│   │   └── RoutingResult.jsx         # Displays routing recommendations
│   └── upload/
│       └── FileUpload.jsx            # Document upload interface
├── pages/
│   └── ClaimsProcessor.jsx           # Main application page
├── services/
│   ├── documentParser.service.js     # PDF/Word parsing logic
│   ├── fieldExtractor.service.js     # Claim field extraction
│   ├── routing.service.js            # Intelligent claim routing
│   └── validation.service.js         # Field validation rules
├── utils/
│   └── constants.js                  # Application constants
├── App.jsx                           # Root component
├── main.jsx                          # React entry point
└── index.css                         # Global styles
```

## How It Works

### 1. Document Upload
Users upload claim documents (PDF or DOCX format) using the drag-and-drop interface or file picker.

### 2. Document Parsing
The system parses documents using:
- **PDF.js** for PDF documents
- **Mammoth** for Word (.docx) documents

Extracted text is sent to the field extraction service.

### 3. Field Extraction
The extraction engine uses pattern matching to identify and extract:
- **Policy Information**: Policy number, policyholder name, effective dates
- **Incident Information**: Date, time, location, description of loss
- **Involved Parties**: Claimant details, third parties, contact information
- **Asset Details**: Asset type, VIN/ID, estimated damage amount
- **Mandatory Fields**: Claim type, attachments, initial estimates

### 4. Validation
Extracted fields are validated against required field rules, identifying:
- Missing critical fields
- Data quality issues
- Incomplete information requiring follow-up

### 5. Intelligent Routing
The claim is routed based on:
- **Claim Type**: Auto, property, liability, health, etc.
- **Damage Estimate**: Severity assessment
- **Completeness**: Priority based on missing information
- **Complexity**: Routing recommendations with reasoning

### 6. Output Generation
Results are presented in multiple formats:
- Formatted UI display with animations
- Complete JSON export for system integration
- Missing fields summary for manual review

## Technology Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Lightning-fast build tool
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Framer Motion 12.33.0** - Smooth animations and gestures

### Document Processing
- **PDF.js 5.4.624** - PDF parsing and text extraction
- **Mammoth 1.11.0** - Word document parsing

### Utilities
- **File Saver 2.0.5** - Client-side file downloads

### Development
- **ESLint 9.39.1** - Code quality
- **React Plugin** - React-specific linting rules
- **Vite plugin for React** - Hot module reloading

## Available Scripts

```bash
# Development server with HMR
npm run dev

# Production build
npm run build

# Code linting
npm run lint

# Preview production build locally
npm run preview
```

## Usage Guide

### Step-by-Step Process

1. **Open the Application**
   - Navigate to the Synapx Claims Agent interface

2. **Upload a Claim Document**
   - Drag and drop a PDF or Word document onto the upload area, or
   - Click to select a file from your computer

3. **Review Extracted Information**
   - View all automatically extracted fields organized by category
   - Check the "Extracted" tab for formatted display

4. **Check for Missing Fields**
   - Review the "Missing Fields" section
   - Address any critical gaps before submission

5. **Review Routing Recommendation**
   - Check the recommended claim route
   - Review the routing reasoning

6. **Export Results**
   - Download the complete results as JSON
   - Use for downstream system integration

## API & Service Layer

### fieldExtractor.service.js
Extracts structured data from document text using regex patterns.

```javascript
extractFields(text) → {
  policyInformation: { ... },
  incidentInformation: { ... },
  involvedParties: { ... },
  assetDetails: { ... },
  otherMandatoryFields: { ... }
}
```

### validation.service.js
Validates extracted fields and identifies gaps.

```javascript
validateFields(fields) → Array<string> // Missing field names
```

### routing.service.js
Recommends optimal claim routing based on attributes.

```javascript
routeClaim(attributes, missingFields) → {
  recommendedRoute: string,
  reasoning: string
}
```

### documentParser.service.js
Handles document parsing for multiple formats.

```javascript
parseDocument(file) → Promise<string> // Extracted text
```

## Supported File Formats

- **PDF** (.pdf) - Full support via PDF.js
- **Word Documents** (.docx) - Full support via Mammoth
- **Plain Text** (.txt) - Supported through standard handling

## Configuration

### Environment Setup
- **Node Version**: 18+
- **Package Manager**: npm or yarn
- **Build Target**: ES modules

### Tailwind CSS Configuration
Configured in `tailwind.config.js` with responsive design breakpoints and custom theme extensions.

### Vite Configuration
Fast refresh and React plugin enabled in `vite.config.js` for optimal development experience.

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Performance Considerations

- **Document Parsing**: Optimized for documents up to 10MB
- **Field Extraction**: Real-time processing with visual feedback
- **Memory Usage**: Efficient streaming of large PDFs
- **Bundle Size**: ~300KB gzipped (optimized production build)

## Error Handling

The application handles:
- Invalid file formats
- Corrupted documents
- Missing required fields
- Extraction failures with fallback options
- Network issues (when integrated with backend)

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## Code Standards

- **Linting**: ESLint configuration enforced
- **Component Naming**: PascalCase for components
- **File Organization**: Logical grouping by feature/functionality
- **Service Layer**: Business logic separated from UI

## License

ISC License - See LICENSE file for details

## Support & Documentation

For issues, feature requests, or documentation:
1. Check existing documentation files
2. Review the component/service code comments
3. File an issue in the repository task tracker

## Roadmap

- [ ] Backend API integration for persisted claim storage
- [ ] Advanced ML-based claim classification
- [ ] Multi-language document support
- [ ] OCR for scanned documents
- [ ] Real-time collaborative claim review
- [ ] Advanced analytics dashboard
- [ ] Integration with major insurance platforms

## Acknowledgments

Built with modern React patterns and best practices, leveraging:
- Vite for rapid development cycles
- Tailwind CSS for responsive design
- Community-maintained document parsing libraries

---

**Synapx Claims Agent** - Automating claims processing for the modern insurance industry
