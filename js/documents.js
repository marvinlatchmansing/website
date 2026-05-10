const files = [
    {
        "name": "cd-dutch.docx",
        "path": "documents/cd-dutch.docx",
        "extension": "docx",
        "size": "2570.74 KB",
        "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    },
    {
        "name": "cd-dutch.pdf",
        "path": "documents/cd-dutch.pdf",
        "extension": "pdf",
        "size": "14.44 KB",
        "type": "application/pdf"
    },
    {
        "name": "sharwien.pdf",
        "path": "documents/sharwien.pdf",
        "extension": "pdf",
        "size": "429.7 KB",
        "type": "application/pdf"
    }
];

function loadDocuments() {
    console.log("JS loaded");

    const grid = document.getElementById('documentsGrid');

    if (!grid) {
        console.log("documentsGrid not found");
        return;
    }

    grid.innerHTML = "";

    files.forEach(file => {

        let icon = 'fa-file';

        if (file.type.includes('pdf')) {
            icon = 'fa-file-pdf';
        }
        else if (file.type.includes('word')) {
            icon = 'fa-file-word';
        }
        else if (file.type.includes('excel')) {
            icon = 'fa-file-excel';
        }
        else if (file.type.includes('image')) {
            icon = 'fa-file-image';
        }

        grid.innerHTML += `
            <div class="document-card">

                <div class="document-top">

                    <div class="file-icon">
                        <i class="fa-solid ${icon}"></i>
                    </div>

                    <div class="file-type">
                        ${file.extension.toUpperCase()}
                    </div>

                </div>

                <h2 class="document-name">
                    ${file.name}
                </h2>

                <div class="document-info">
                    <span>${file.size}</span>
                </div>

                <div class="document-actions">

                    <a href="${file.path}" target="_blank" class="btn view-btn">
                        View
                    </a>

                    <a href="${file.path}" download class="btn download-btn">
                        Download
                    </a>

                </div>

            </div>
        `;
    });
}

/* ✅ THIS WAS MISSING */
document.addEventListener("DOMContentLoaded", loadDocuments);