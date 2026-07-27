from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "cv-dirga-halim-susilo.pdf"

NAVY = colors.HexColor("#17263D")
BLUE = colors.HexColor("#2563A7")
TEXT = colors.HexColor("#20242A")
MUTED = colors.HexColor("#566171")
LINE = colors.HexColor("#CFD7E3")
PALE = colors.HexColor("#F4F7FB")

pdfmetrics.registerFont(
    TTFont("DejaVuSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf")
)
pdfmetrics.registerFont(
    TTFont(
        "DejaVuSans-Bold",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    )
)
pdfmetrics.registerFontFamily(
    "DejaVuSans",
    normal="DejaVuSans",
    bold="DejaVuSans-Bold",
    italic="DejaVuSans",
    boldItalic="DejaVuSans-Bold",
)


def build_resume() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=14 * mm,
        rightMargin=14 * mm,
        topMargin=11 * mm,
        bottomMargin=10 * mm,
        title="Dirga Halim Susilo - Data Analyst Resume",
        author="Dirga Halim Susilo",
        subject="Data Analyst and Business Intelligence resume",
    )

    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Normal"],
            fontName="DejaVuSans-Bold",
            fontSize=22,
            leading=24,
            textColor=NAVY,
            spaceAfter=1,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="DejaVuSans-Bold",
            fontSize=10.8,
            leading=14,
            textColor=BLUE,
            spaceAfter=3,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="DejaVuSans",
            fontSize=8,
            leading=10.6,
            textColor=MUTED,
            allowWidows=0,
            allowOrphans=0,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Normal"],
            fontName="DejaVuSans-Bold",
            fontSize=8.7,
            leading=10.6,
            tracking=1.2,
            textColor=NAVY,
            spaceBefore=2,
            spaceAfter=2,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="DejaVuSans",
            fontSize=8.5,
            leading=11.4,
            textColor=TEXT,
            spaceAfter=1,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontName="DejaVuSans",
            fontSize=8,
            leading=10.4,
            textColor=TEXT,
        ),
        "heading": ParagraphStyle(
            "Heading",
            parent=base["Normal"],
            fontName="DejaVuSans-Bold",
            fontSize=8.8,
            leading=11,
            textColor=NAVY,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="DejaVuSans",
            fontSize=7.9,
            leading=10.2,
            alignment=TA_RIGHT,
            textColor=MUTED,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="DejaVuSans",
            fontSize=8.15,
            leading=10.7,
            leftIndent=8,
            firstLineIndent=-5,
            bulletIndent=1,
            bulletFontName="DejaVuSans",
            bulletFontSize=6,
            textColor=TEXT,
            spaceAfter=0.6,
        ),
        "project": ParagraphStyle(
            "Project",
            parent=base["Normal"],
            fontName="DejaVuSans",
            fontSize=8.1,
            leading=10.7,
            textColor=TEXT,
            spaceAfter=1.1,
        ),
    }

    story = []

    story.append(Paragraph("Dirga Halim Susilo", styles["name"]))
    story.append(Paragraph("DATA ANALYST &amp; BUSINESS INTELLIGENCE", styles["role"]))
    story.append(
        Paragraph(
            "Medan, Indonesia&nbsp;&nbsp; | &nbsp;&nbsp;"
            '<link href="mailto:dirgahalimsusilo@gmail.com" color="#566171">'
            "dirgahalimsusilo@gmail.com</link>&nbsp;&nbsp; | &nbsp;&nbsp;"
            "+62 823-6745-3590",
            styles["contact"],
        )
    )
    story.append(
        Paragraph(
            '<link href="https://linkedin.com/in/dirgahalimsusilo" color="#2563A7">'
            "linkedin.com/in/dirgahalimsusilo</link>&nbsp;&nbsp; | &nbsp;&nbsp;"
            '<link href="https://github.com/8shagrid" color="#2563A7">'
            "github.com/8shagrid</link>&nbsp;&nbsp; | &nbsp;&nbsp;"
            '<link href="https://dirgahalimsusilo.site" color="#2563A7">'
            "dirgahalimsusilo.site</link>",
            styles["contact"],
        )
    )
    story.append(Spacer(1, 4))

    def section(title: str) -> None:
        story.append(Paragraph(title.upper(), styles["section"]))
        story.append(
            HRFlowable(
                width="100%",
                thickness=0.6,
                color=LINE,
                spaceBefore=0,
                spaceAfter=3,
            )
        )

    def experience(
        role: str,
        company: str,
        period: str,
        location: str,
        bullets: list[str],
    ) -> None:
        header = Table(
            [
                [
                    Paragraph(
                        f"{role} <font color='#566171'>| {company}</font>",
                        styles["heading"],
                    ),
                    Paragraph(f"{period}<br/>{location}", styles["meta"]),
                ]
            ],
            colWidths=[129 * mm, 38 * mm],
            hAlign="LEFT",
        )
        header.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LEFTPADDING", (0, 0), (-1, -1), 0),
                    ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
                ]
            )
        )
        items = [header]
        items.extend(
            Paragraph(item, styles["bullet"], bulletText="-") for item in bullets
        )
        items.append(Spacer(1, 2))
        story.append(KeepTogether(items))

    section("Professional Summary")
    story.append(
        Paragraph(
            "Data Analyst with experience translating business needs into analytical "
            "questions, cleaned datasets, interactive dashboards, and practical "
            "recommendations. Skilled in SQL, Python, Excel, Power BI, Tableau, and "
            "end-to-end reporting, with additional technical experience building "
            "production data-enabled products.",
            styles["body"],
        )
    )
    story.append(Spacer(1, 2))

    section("Core Skills")
    skills_table = Table(
        [
            [
                Paragraph(
                    "<b>Analysis &amp; BI</b><br/>SQL, Excel, Power BI, Tableau, "
                    "Looker Studio, KPI reporting, dashboard design, data storytelling",
                    styles["small"],
                ),
                Paragraph(
                    "<b>Programming &amp; Data</b><br/>Python, Pandas, NumPy, "
                    "statistics, EDA, data cleaning, data wrangling, PostgreSQL, ETL",
                    styles["small"],
                ),
            ]
        ],
        colWidths=[84 * mm, 83 * mm],
        hAlign="LEFT",
    )
    skills_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE),
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    story.append(skills_table)
    story.append(Spacer(1, 3))

    section("Experience")
    experience(
        "Freelance Data Analyst",
        "Remote / Various Clients",
        "Jul 2024 - Present",
        "Indonesia",
        [
            "Translate business needs into analytical questions and reporting requirements.",
            "Execute end-to-end analysis covering data collection, cleaning, transformation, exploration, and visualization.",
            "Build interactive dashboards using Excel, Power BI, Tableau, or Looker Studio to monitor KPIs and communicate findings.",
        ],
    )
    experience(
        "Data Scientist Intern",
        "PT eBdesk Teknologi",
        "Feb 2023 - Jul 2023",
        "Tangerang Selatan",
        [
            "Supported election-data research through cleaning, exploratory analysis, feature preparation, and preliminary visualization.",
            "Assisted preprocessing and model parameter-tuning experiments under senior mentorship.",
        ],
    )
    experience(
        "HR Data Analyst Intern",
        "Santara",
        "Dec 2020 - Feb 2021",
        "Yogyakarta",
        [
            "Validated attendance, leave, and employee records in the HRIS and compiled performance data into Excel reports and PivotTables.",
            "Categorized internal application feedback to help identify workflow and usability pain points.",
        ],
    )

    section("Selected Analytics Projects")
    projects = [
        (
            "HR Analytics Dashboard",
            "Analyzed a workforce dataset representing 588 employees and a 15% "
            "attrition rate. Built interactive Excel views for demographic, job, "
            "department, satisfaction, and retention analysis.",
            "Excel, PivotTables, PivotCharts, Slicers",
        ),
        (
            "Car Sales Dashboard",
            "Created executive KPI reporting for a dataset representing 1.05M units "
            "and $31.48B in sales, with monthly trends, product mix, commissions, "
            "and salesperson rankings.",
            "Excel, PivotTables, Charts, Conditional Formatting",
        ),
        (
            "Road Accident Dashboard",
            "Summarized 417,883 casualties by severity, month, road type, lighting, "
            "surface conditions, and urban-rural distribution with interactive filters.",
            "Excel, PivotTables, PivotCharts, Slicers",
        ),
    ]
    for title, description, tools in projects:
        story.append(
            Paragraph(
                f"<b>{title}</b> - {description} "
                f"<font color='#566171'><i>Tools: {tools}.</i></font>",
                styles["project"],
            )
        )
    story.append(Spacer(1, 2))

    section("Education, Leadership & Certifications")
    education_table = Table(
        [
            [
                Paragraph(
                    "<b>Bachelor of Data Science</b><br/>"
                    "Universitas Teknologi Yogyakarta | Sep 2020 - Aug 2024<br/>"
                    "<b>GPA:</b> 3.77 / 4.00<br/>"
                    "<b>Research:</b> CNN-based web sign-language translator",
                    styles["small"],
                ),
                Paragraph(
                    "<b>Leadership</b><br/>"
                    "Head of Research, Data Science Indonesia Yogyakarta "
                    "(Aug 2022 - Jan 2023)<br/>"
                    "Lecturer Assistant, Universitas Teknologi Yogyakarta "
                    "(Sep 2022 - Jan 2023)",
                    styles["small"],
                ),
            ]
        ],
        colWidths=[84 * mm, 83 * mm],
        hAlign="LEFT",
    )
    education_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, 0), 0),
                ("RIGHTPADDING", (0, 0), (0, 0), 7),
                ("LEFTPADDING", (1, 0), (1, 0), 7),
                ("RIGHTPADDING", (1, 0), (1, 0), 0),
                ("LINEBEFORE", (1, 0), (1, 0), 0.5, LINE),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ]
        )
    )
    story.append(education_table)
    story.append(Spacer(1, 2))
    story.append(
        Paragraph(
            "<b>Selected certifications:</b> SQL Advanced - HackerRank; Google Data "
            "Analytics - Coursera; Data Analyst Bootcamp - 365 Careers; TensorFlow "
            "for Deep Learning - Zero To Mastery Academy. "
            "<b>Languages:</b> Indonesian (Native), English (Professional working proficiency).",
            styles["small"],
        )
    )

    doc.build(story)


if __name__ == "__main__":
    build_resume()
