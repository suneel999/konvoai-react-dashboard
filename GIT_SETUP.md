# Git Setup & Sharing Guide

## 📋 Prerequisites

1. Install Git: https://git-scm.com/downloads
2. Create a GitHub account (or GitLab/Bitbucket)
3. Install Git on your machine

## 🚀 Step 1: Initialize Git Repository

Open PowerShell/Terminal in your project folder (`D:\konvoAI React`) and run:

```bash
git init
```

## 📝 Step 2: Add All Files

```bash
git add .
```

## 💾 Step 3: Create First Commit

```bash
git commit -m "Initial commit: Konvo AI React Dashboard"
```

## 🌐 Step 4: Create GitHub Repository

### Option A: Via GitHub Website

1. Go to https://github.com/new
2. Repository name: `konvoai-react-dashboard`
3. Description: "Modern React dashboard for Konvo AI assistant"
4. Choose **Private** (recommended) or Public
5. **DO NOT** initialize with README (you already have one)
6. Click "Create repository"

### Option B: Via GitHub CLI

```bash
gh repo create konvoai-react-dashboard --private --source=. --remote=origin --push
```

## 🔗 Step 5: Connect to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR-USERNAME/konvoai-react-dashboard.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## 👥 Step 6: Share with Team

### For Personal Access:

1. Go to your repository on GitHub
2. Click **Settings** → **Collaborators** → **Add people**
3. Add your personal email/account

### For Backend Team:

1. Go to your repository on GitHub
2. Click **Settings** → **Collaborators** → **Add people**
3. Add backend team members' GitHub usernames/emails
4. They'll receive an invitation email

## 🔐 Alternative: Use SSH (More Secure)

### Setup SSH Key:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub
```

### Add to GitHub:

1. Go to GitHub Settings → SSH and GPG keys
2. Click "New SSH key"
3. Paste your public key
4. Save

### Change remote to SSH:

```bash
git remote set-url origin git@github.com:YOUR-USERNAME/konvoai-react-dashboard.git
```

## 📤 Daily Git Workflow

### When you make changes:

```bash
# Check what changed
git status

# Add specific files
git add src/components/NewComponent.tsx

# Or add all changes
git add .

# Commit with descriptive message
git commit -m "feat: add new feature XYZ"

# Push to GitHub
git push
```

### When team members make changes:

```bash
# Pull latest changes
git pull

# If conflicts occur, resolve them and:
git add .
git commit -m "merge: resolved conflicts"
git push
```

## 🌿 Branch Strategy (Recommended)

### For different features:

```bash
# Create new branch for feature
git checkout -b feature/user-authentication

# Work on feature...
git add .
git commit -m "feat: add user authentication"

# Push branch to GitHub
git push -u origin feature/user-authentication

# Create Pull Request on GitHub
# After review and approval, merge to main
```

### For backend integration:

```bash
# Create branch for API integration
git checkout -b backend/api-integration

# After backend team provides APIs
git add .
git commit -m "feat: integrate backend APIs"
git push -u origin backend/api-integration
```

## 🏷️ Commit Message Convention

Use clear, descriptive commit messages:

- `feat: add new feature`
- `fix: resolve bug in component`
- `style: update UI styling`
- `refactor: improve code structure`
- `docs: update documentation`
- `test: add tests`

## 📊 GitHub Repository Settings

### Protect Main Branch:

1. Repository → Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - ✅ Require pull request reviews
   - ✅ Require status checks
   - ✅ Include administrators (optional)

### Set Up GitHub Actions (Optional):

Create `.github/workflows/build.yml` for automatic builds

## 🔄 Sync with Multiple Remotes

### Add backend team's repository:

```bash
git remote add backend-team https://github.com/backend-team/konvoai-backend.git
git fetch backend-team
```

## 📱 Team Member Instructions

Send this to your team members:

```
# Clone Repository
git clone https://github.com/YOUR-USERNAME/konvoai-react-dashboard.git
cd konvoai-react-dashboard

# Install Dependencies
npm install

# Run Development Server
npm run dev

# Create feature branch
git checkout -b feature/your-feature-name

# After making changes
git add .
git commit -m "description of changes"
git push origin feature/your-feature-name
```

## 🆘 Common Issues

### Issue: Permission Denied

```bash
# Use personal access token instead of password
# Generate token: GitHub Settings → Developer settings → Personal access tokens
```

### Issue: Merge Conflicts

```bash
git pull
# Resolve conflicts in your editor
git add .
git commit -m "merge: resolved conflicts"
git push
```

### Issue: Accidentally committed node_modules

```bash
git rm -r --cached node_modules
git commit -m "fix: remove node_modules from git"
git push
```

## 📚 Useful Git Commands

```bash
# View commit history
git log --oneline --graph

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename

# View differences
git diff

# Switch branches
git checkout branch-name

# Delete branch
git branch -d branch-name

# View all branches
git branch -a
```

## 🎯 Next Steps

1. ✅ Initialize Git repository
2. ✅ Create GitHub account
3. ✅ Push code to GitHub
4. ✅ Invite team members
5. ✅ Set up branch protection
6. ✅ Share repository link with team
7. ✅ Backend team clones and integrates

---

Need help? Contact the project maintainer or check [Git Documentation](https://git-scm.com/doc)
